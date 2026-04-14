import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Tracking from "@/models/Tracking";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
    }

    // IP Address extraction
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : req.headers.get("x-real-ip") || "unknown-ip";

    await dbConnect();

    const newLog = new Tracking({
      ipAddress: ip,
      userAgent: body.userAgent || req.headers.get("user-agent") || "unknown",
      browser: body.browser || "unknown",
      os: body.os || "unknown",
      deviceType: body.deviceType || "desktop",
      screenResolution: body.screenResolution || "unknown",
      language: body.language || req.headers.get("accept-language") || "unknown",
      timezone: body.timezone || "unknown",
      referrer: body.referrer || "direct",
      currentUrl: body.currentUrl || "unknown",
      consentGiven: body.consentGiven === true
    });

    await newLog.save();

    return NextResponse.json({ success: true, message: "Analytics logged" }, { status: 200 });
  } catch (error) {
    console.error("API Analytics Error:", error);
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 500 });
  }
}
