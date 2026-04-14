"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterested: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields (Name, Email, Message).");
      setStatus("error");
      return;
    }
    
    setStatus("submitting");
    setErrorMsg("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.contactContainer}`}>
        
        {/* Header — Editorial Layout */}
        <div className={`${styles.sectionHeader} animate-fade-in-up`}>
          <div className={styles.headerLeft}>
            <div className={styles.labelRow}>
              <div className={styles.labelLine}></div>
              <span className={styles.labelSmall}>GET IN TOUCH</span>
            </div>
            <h2 className={styles.sectionTitle}>Let&apos;s Build Something <br/> Great Together</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.sectionDesc}>
              Our experts are available to provide insights and solutions tailored to your business needs.
            </p>
            <div className={styles.dividerLine}></div>
          </div>
        </div>
        
        <div className={styles.layout}>
          
          {/* Left Column - Contact Info */}
          <div className={`${styles.leftCol} animate-fade-in-up`} style={{ animationDelay: "200ms" }}>
            
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <Mail className={styles.icon} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Email Us</div>
                  <a href="mailto:Info@axiomrise.sg" className={styles.infoValueGold}>Info@axiomrise.sg</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <MapPin className={styles.icon} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Office Address</div>
                  <div className={styles.infoValue}>336 Smith Street, #05-301, New Bridge Centre, Singapore 050336</div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconCircle}>
                  <Clock className={styles.icon} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Office Hours</div>
                  <div className={styles.infoValue}>Mon &ndash; Fri, 9:00 AM &ndash; 6:00 PM SGT</div>
                </div>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className={`${styles.rightCol} animate-fade-in-up`} style={{ animationDelay: "400ms" }}>
            <div className={styles.formCard}>
              {status === "success" ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={64} className={styles.successIcon} />
                  <h3>Thank you!</h3>
                  <p>We&apos;ll be in touch shortly.</p>
                  <button onClick={() => setStatus("idle")} className={styles.resetBtn}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  
                  {status === "error" && (
                    <div className={styles.errorMessage}>
                      <AlertCircle size={20} />
                      {errorMsg}
                    </div>
                  )}

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="fullName">Full Name *</label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="companyName">Company Name</label>
                      <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="serviceInterested">Service Interested In</label>
                    <div className={styles.selectWrapper}>
                      <select id="serviceInterested" name="serviceInterested" value={formData.serviceInterested} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option value="Permanent Placement">Permanent Placement</option>
                        <option value="Contract Staffing">Contract Staffing</option>
                        <option value="Payroll Administration">Payroll Administration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send Message \u2192"}
                  </button>
                  <p className={styles.formNote}>We typically respond within 1 business day.</p>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
