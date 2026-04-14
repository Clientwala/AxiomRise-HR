import mongoose, { Schema, Document } from "mongoose";

export interface ITracking extends Document {
  ipAddress: string;
  userAgent: string;
  browser: string;
  os: string;
  deviceType: string;
  screenResolution: string;
  language: string;
  timezone: string;
  referrer: string;
  currentUrl: string;
  consentGiven: boolean;
  timestamp: Date;
}

const TrackingSchema: Schema = new Schema({
  ipAddress: { type: String, default: "unknown" },
  userAgent: { type: String },
  browser: { type: String },
  os: { type: String },
  deviceType: { type: String },
  screenResolution: { type: String },
  language: { type: String },
  timezone: { type: String },
  referrer: { type: String },
  currentUrl: { type: String },
  consentGiven: { type: Boolean, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Tracking || mongoose.model<ITracking>("Tracking", TrackingSchema, "analytics");
