"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import PencilEffect, { SketchedVision, SketchedMission } from "./HanddrawnIcons";

export default function About() {
  const mosaicRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!mosaicRef.current) return;
      const rect = mosaicRef.current.getBoundingClientRect();
      // Only calculate if element is near the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const centerOffset = window.innerHeight / 2 - (rect.top + rect.height / 2);
        setScrollY(centerOffset);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <PencilEffect />
      <div className={`container ${styles.aboutContainer}`}>

        {/* Header — Editorial Layout */}
        <div className={`${styles.sectionHeader} animate-fade-in-up`}>
          <div className={styles.headerLeft}>
            <div className={styles.labelRow}>
              <div className={styles.labelLine}></div>
              <span className={styles.labelSmall}>WHO WE ARE</span>
            </div>
            <h2 className={styles.sectionTitle}>Enabling Talent Excellence <br /> in Asia Pacific</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.sectionDesc}>
              Axiom Rise Pte. Ltd. is a Singapore-incorporated Talent & HR Solutions firm. We connect high-caliber professionals with leading organisations to drive sustainable business growth across the region.
            </p>
            <div className={styles.dividerLine}></div>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Left Column - Content Cards */}
          <div className={`${styles.leftColumn} animate-fade-in-up`}>
            
            <div className={styles.cardsWrapper}>
              {/* Vision Card */}
              <div className={`${styles.aboutCard} ${styles.visionCard}`} onMouseMove={handleMouseMove}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <SketchedVision className={styles.iconGold} />
                  </div>
                  <span className={styles.cardLabel}>OUR VISION</span>
                </div>
                <p className={styles.cardText}>
                  To become the premier talent and HR solutions partner for enterprises in Singapore and recognized across the Asia Pacific region.
                </p>
              </div>

              {/* Mission Card */}
              <div className={`${styles.aboutCard} ${styles.missionCard}`} onMouseMove={handleMouseMove}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle}>
                    <SketchedMission className={styles.iconGold} />
                  </div>
                  <span className={styles.cardLabel}>OUR MISSION</span>
                </div>
                <p className={styles.cardText}>
                  To deliver tailored recruitment solutions and payroll administration aligned with evolving workforce and market needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Unique Triple-Layer Mosaic */}
          <div className={`${styles.rightColumn} animate-fade-in-up`} style={{ animationDelay: "200ms" }}>
            <div className={styles.visualMosaic} ref={mosaicRef}>
              
              {/* Image 1: Secondary Portrait (Woman Leading) */}
              <div className={styles.parallaxWrapper} style={{ transform: `translateY(${scrollY * -0.06}px)` }}>
                <div className={styles.imageLayerUnder}>
                  <Image 
                    src="/asset/singaporean style/medium-shot-woman-leading-team.jpg" 
                    alt="Professional Leadership" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.aboutImage}
                  />
                </div>
              </div>

              {/* Image 2: Primary Large (Team Collaboration) */}
              <div className={styles.parallaxWrapper} style={{ transform: `translateY(${scrollY * 0.04}px)` }}>
                <div className={styles.imageLayerMain}>
                  <Image 
                    src="/asset/singaporean style/successful-team-discussing-project-tablet.jpg" 
                    alt="Team Collaboration" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.aboutImage}
                  />
                </div>
              </div>

              {/* Image 3: Landmark/Context (CBD/Skyline) */}
              <div className={styles.parallaxWrapper} style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
                <div className={styles.imageLayerContext}>
                  <Image 
                    src="/asset/service images/payroll-still-life-with-cash-high-angle.jpg" 
                    alt="Payroll & HR Services" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.aboutImage}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
