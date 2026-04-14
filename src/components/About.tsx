"use client";

import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import PencilEffect, { SketchedVision, SketchedMission } from "./HanddrawnIcons";

export default function About() {
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
              <div className={`${styles.aboutCard} ${styles.visionCard}`}>
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
              <div className={`${styles.aboutCard} ${styles.missionCard}`}>
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
            <div className={styles.visualMosaic}>
              
              {/* Image 1: Secondary Portrait (Woman Leading) */}
              <div className={styles.imageLayerUnder}>
                <Image 
                  src="/asset/singaporean style/medium-shot-woman-leading-team.jpg" 
                  alt="Professional Leadership" 
                  fill
                  className={styles.aboutImage}
                />
              </div>

              {/* Image 2: Primary Large (Team Collaboration) */}
              <div className={styles.imageLayerMain}>
                <Image 
                  src="/asset/singaporean style/successful-team-discussing-project-tablet.jpg" 
                  alt="Team Collaboration" 
                  fill
                  className={styles.aboutImage}
                />
              </div>

              {/* Image 3: Landmark/Context (CBD/Skyline) */}
              <div className={styles.imageLayerContext}>
                <Image 
                  src="/asset/service images/payroll-still-life-with-cash-high-angle.jpg" 
                  alt="Payroll & HR Services" 
                  fill
                  className={styles.aboutImage}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
