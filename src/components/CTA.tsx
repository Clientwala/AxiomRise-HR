import styles from "./CTA.module.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SketchedPermanent, SketchedContract, SketchedPayroll, SketchedWebDev } from "./HanddrawnIcons";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={`${styles.splitLayout} animate-fade-in-up`}>
          
          {/* Left Side: Content */}
          <div className={styles.contentSide}>

            {/* Editorial label */}
            <div className={styles.labelRow}>
              <div className={styles.labelLine}></div>
              <span className={styles.label}>READY TO GROW?</span>
            </div>

            <h2 className={styles.heading}>
              Elevate Your Workforce with Our{" "}
              <span className={styles.goldText}>Top-Tier Talent</span>
            </h2>

            <p className={styles.description}>
              Stop worrying about skill gaps, extended vacancies, or operational slowdowns. We connect you with the industry&apos;s best professionals.
            </p>

            {/* Trust metrics row */}
            <div className={styles.metricsRow}>
              <div className={styles.metric}>
                <SketchedPermanent className={styles.metricIcon} />
                <span>Permanent Placement</span>
              </div>
              <div className={styles.metric}>
                <SketchedContract className={styles.metricIcon} />
                <span>Contract Staffing</span>
              </div>
              <div className={styles.metric}>
                <SketchedPayroll className={styles.metricIcon} />
                <span>Payroll Admin</span>
              </div>
              <div className={styles.metric}>
                <SketchedWebDev className={styles.metricIcon} />
                <span>Web Development</span>
              </div>
            </div>

            <a href="#contact" className={styles.actionBtn}>
              Schedule a Consultation
            </a>

          </div>
          
          {/* Right Side: Image */}
          <div className={styles.visualSide}>
            <div className={styles.imageWrapper}>
              <div className={styles.colorTint}></div>
              <Image 
                src="/asset/singaporean style/people-working-with-documents-laptop.jpg"
                alt="Talent Acquisition Partners"
                width={700}
                height={500}
                className={styles.premiumImgae}
              />
              <div className={styles.borderEffect}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
