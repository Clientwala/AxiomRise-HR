import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={`container ${styles.gridContainer}`}>
        
        {/* Left Panel: Primary Content */}
        <div className={`${styles.mainPanel} animate-fade-in-up`}>
          <div className={styles.categoryTag}>Premium Talent Solutions</div>
          
          <h1 className={styles.headline}>
            Build the workforce of tomorrow. <span className={styles.goldAccent}>Today.</span>
          </h1>
          
          <p className={styles.subtext}>
            We connect Asia Pacific&apos;s leading enterprises with exceptional talent. Experience tailored recruitment solutions and seamless payroll administration designed for sustainable growth.
          </p>
          
          <div className={styles.actionGroup}>
            <a href="#contact" className={styles.primaryActionButton}>
              Start Hiring
            </a>
            <a href="#services" className={styles.textLink}>Explore Services</a>
          </div>
        </div>

        {/* Right Side: Triple Image Editorial Mosaic */}
        <div className={styles.mosaicGrid}>
          
          <div className={`${styles.mosaicTall} animate-fade-in-up`} style={{ animationDelay: "200ms" }}>
            <Image 
              src="/asset/service images/business-meeting-office.jpg"
              alt="Executive Strategy"
              fill
              className={styles.editorialImage}
              priority
            />
          </div>
          
          <div className={`${styles.mosaicWide} animate-fade-in-up`} style={{ animationDelay: "300ms" }}>
            <Image 
              src="/asset/service images/consulting-with-lawyer.jpg"
              alt="Professional Engagement"
              fill
              className={styles.editorialImage}
              priority
            />
          </div>

          <div className={`${styles.mosaicSquare} animate-fade-in-up`} style={{ animationDelay: "400ms" }}>
            <Image 
              src="/asset/singaporean style/group-business-women-having-meeting-office.jpg"
              alt="Singapore professionals collaborating"
              fill
              className={styles.editorialImage}
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
