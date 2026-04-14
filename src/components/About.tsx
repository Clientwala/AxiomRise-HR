"use client";

import React, { useState } from "react";
import styles from "./About.module.css";
import { Target, Compass } from "lucide-react";
import Image from "next/image";

export default function About() {
  const [tiltVision, setTiltVision] = useState({ x: 0, y: 0 });
  const [tiltMission, setTiltMission] = useState({ x: 0, y: 0 });

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>, setter: typeof setTiltVision) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Calculate max tilt of 10 degrees
    const rotateX = -(y / rect.height) * 20; 
    const rotateY = (x / rect.width) * 20;
    setter({ x: rotateX, y: rotateY });
  };

  const resetTilt = (setter: typeof setTiltVision) => setter({ x: 0, y: 0 });
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>

        {/* Responsive Grid */}
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={`${styles.leftColumn} animate-fade-in-up`}>
            <div className={styles.labelSmall}>WHO WE ARE</div>
            <h2 className={styles.heading}>Enabling Talent Excellence in <br /> Asia Pacific</h2>
            
            <p className={styles.introText}>
               Axiom Rise Pte. Ltd. is a Singapore incorporated IT Services firm supporting clients across the Asia Pacific region. As a trusted leader in talent and HR solutions, we connect high-caliber professionals with leading organisations to foster strategic partnerships and drive business growth.
            </p>

            <div className={styles.cardsWrapper}>
              {/* Vision Card */}
              <div 
                className={`${styles.aboutCard} ${styles.visionCard} ${tiltVision.x || tiltVision.y ? styles.cardActive : ''}`}
                onMouseMove={(e) => handleTilt(e, setTiltVision)}
                onMouseLeave={() => resetTilt(setTiltVision)}
                style={{ transform: `perspective(1000px) rotateX(${tiltVision.x}deg) rotateY(${tiltVision.y}deg) ${tiltVision.x || tiltVision.y ? 'scale3d(1.02, 1.02, 1.02)' : ''}` }}
              >
                <div className={styles.cardHeader}>
                  <Target className={styles.visionIcon} size={18} />
                  <span className={styles.cardLabelVision}>OUR VISION</span>
                </div>
                <p className={styles.cardTextVision}>
                  To become the premier talent and HR solutions partner for enterprises in Singapore and recognized across the Asia Pacific region.
                </p>
              </div>

              {/* Mission Card */}
              <div 
                className={`${styles.aboutCard} ${styles.missionCard} ${tiltMission.x || tiltMission.y ? styles.cardActive : ''}`}
                onMouseMove={(e) => handleTilt(e, setTiltMission)}
                onMouseLeave={() => resetTilt(setTiltMission)}
                style={{ transform: `perspective(1000px) rotateX(${tiltMission.x}deg) rotateY(${tiltMission.y}deg) ${tiltMission.x || tiltMission.y ? 'scale3d(1.02, 1.02, 1.02)' : ''}` }}
              >
                <div className={styles.cardHeader}>
                  <Compass className={styles.missionIcon} size={18} />
                  <span className={styles.cardLabelMission}>OUR MISSION</span>
                </div>
                <p className={styles.cardTextMission}>
                  To deliver tailored recruitment solutions and payroll administration aligned with evolving workforce and market needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`${styles.rightColumn} animate-fade-in-up`} style={{ animationDelay: "200ms" }}>
            <div className={styles.visualWrapper}>
              
              {/* Aurora Borealis Background Effect */}
              <div className={styles.auroraWrapper}>
                <div className={`${styles.orb} ${styles.orb1}`}></div>
                <div className={`${styles.orb} ${styles.orb2}`}></div>
                <div className={`${styles.orb} ${styles.orb3}`}></div>
              </div>

              <div className={styles.photoContainer}>
                <Image 
                  src="/asset/singaporean style/successful-team-discussing-project-tablet.jpg" 
                  alt="Axiom Rise Professionals Meeting" 
                  width={600} 
                  height={500} 
                  className={styles.aboutImage}
                />
              </div>
            </div>

            <div className={styles.visualDivider}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
