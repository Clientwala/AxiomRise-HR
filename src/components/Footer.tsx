import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.grid}>
          
          {/* Column 1: Brand */}
          <div className={styles.col}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoImageWrapper}>
                <Image src="/logo.png" alt="Axiom Rise Logo" width={150} height={150} unoptimized className={styles.logoImage} />
              </div>
              <span className={styles.brandName}>Axiom Rise</span>
            </div>
            <p className={styles.tagline}>Your Trusted Talent & HR Solutions Partner in Singapore</p>
            <div className={styles.sgInc}>
              <span>🇸🇬</span> Singapore Incorporated
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="/#home">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#contact">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li><a href="/#services">Permanent Placement</a></li>
              <li><a href="/#services">Contract Staffing</a></li>
              <li><a href="/#services">Payroll Administration</a></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.linkList}>
              <li><a href="mailto:Info@axiomrise.sg">Info@axiomrise.sg</a></li>
              <li className={styles.address}>336 Smith Street, #05-301<br/>New Bridge Centre<br/>Singapore 050336</li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} AxiomRise Pte. Ltd. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.dot}>·</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
