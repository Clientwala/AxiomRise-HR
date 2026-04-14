import styles from "./CTA.module.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={`${styles.splitLayout} animate-fade-in-up`}>
          
          {/* Left Side: Content */}
          <div className={styles.contentSide}>
            <span className={styles.label}>READY TO GROW?</span>
            <h2 className={styles.heading}>
              Elevate Your Workforce with Our <span className={styles.goldText}>Top-Tier Talent</span>
            </h2>
            <p className={styles.description}>
              Stop worrying about skill gaps, extended vacancies, or operational slowdowns. We connect you with the industry's best professionals, so you can focus entirely on scaling your core business.
            </p>
            <a href="#contact" className={styles.actionBtn}>
              Schedule a Free Consultation <ArrowRight size={18} className={styles.btnIcon} />
            </a>
          </div>
          
          {/* Right Side: Animated Visual */}
          <div className={styles.visualSide}>
            <div className={styles.imageWrapper}>
              {/* Overlay that fades out on hover */}
              <div className={styles.colorTint}></div>
              
              <Image 
                src="/asset/singaporean style/people-working-with-documents-laptop.jpg"
                alt="Talent Acquisition Partners"
                width={700}
                height={500}
                className={styles.premiumImgae}
              />
              
              {/* Decorative Border effect */}
              <div className={styles.borderEffect}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
