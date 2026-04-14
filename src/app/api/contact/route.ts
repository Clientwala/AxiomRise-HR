import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

// Basic in-memory rate limiter (works per worker thread / serverless function warm instance)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const MAX_REQUESTS = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return true;
  }
  
  if (now > record.expiresAt) {
    // expired, reset
    rateLimitMap.set(ip, { count: 1, expiresAt: now + WINDOW_MS });
    return true;
  }
  
  if (record.count >= MAX_REQUESTS) {
    return false; // rate limited
  }
  
  record.count += 1;
  return true;
}

export async function POST(req: Request) {
  try {
    // Rate limit check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown-ip";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many submissions from this IP. Please try again later." },
        { status: 429 }
      );
    }
    
    // Parse JSON
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
    }
    
    const { fullName, companyName, email, phone, serviceInterested, message } = body;
    
    // Validate required fields
    if (!fullName || !fullName.trim()) return NextResponse.json({ success: false, error: "Full Name is required" }, { status: 400 });
    if (!email || !email.trim()) return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    if (!message || !message.trim()) return NextResponse.json({ success: false, error: "Message is required" }, { status: 400 });
    
    // Connect to DB
    await dbConnect();
    
    // Save to DB
    const newContact = new Contact({
      fullName,
      companyName,
      email,
      phone,
      serviceInterested,
      message,
      source: "website-contact-form"
    });
    
    await newContact.save();
    
    return NextResponse.json({ success: true, message: "Saved successfully" }, { status: 200 });
    
  } catch (error) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
