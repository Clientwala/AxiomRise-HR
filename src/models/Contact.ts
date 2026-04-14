import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  serviceInterested?: string;
  message: string;
  submittedAt: Date;
  source: string;
}

const ContactSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  companyName: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  serviceInterested: { type: String },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  source: { type: String, default: "website-contact-form" }
});

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema, "contacts");
