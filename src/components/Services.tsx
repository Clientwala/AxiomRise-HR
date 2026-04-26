"use client";

import React from "react";
import styles from "./Services.module.css";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      image: "/asset/service images/smiling-diverse-businesswomen-shake-hands-group-meeting-deal-concept.jpg",
      pill: "Talent Acquisition",
      title: "Permanent Placement",
      description: <>Source and secure <strong>top-tier candidates</strong> for perfect long-term cultural alignment and strategic growth.</>,
      link: "#contact"
    },
    {
      image: "/asset/service images/two-men-shaking-hands.jpg",
      pill: "Flexible Workforce",
      title: "Contract Staffing",
      description: <>Scale your workforce rapidly with skilled professionals on <strong>flexible contract terms</strong> for continuous operations.</>,
      link: "#contact"
    },
    {
      image: "/asset/service images/top-view-payroll-concept-with-money.jpg",
      pill: "Operational Efficiency",
      title: "Payroll Administration",
      description: <>Streamline HR with compliant, accurate, and <strong>timely payroll processing</strong> while you focus on core business.</>,
      link: "#contact"
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        
        {/* Header — Editorial 2-column layout */}
        <div className={`${styles.sectionHeader} animate-fade-in-up`}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionLabel}>WHAT WE OFFER</span>
            <h2 className={styles.sectionTitle}>Workforce Solutions <br/> Tailored For You</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.sectionDesc}>
              Our deep industry expertise and strong local market knowledge enable us to support and transform your business in response to evolving future demands. We deliver proven, industry-leading workforce solutions tailored to meet your specific organisational needs.
            </p>
            <div className={styles.dividerLine}></div>
          </div>
        </div>
        
        {/* Cards Grid : Unique Image-Based Cards */}
        <div className={styles.cardsGrid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.imageCard} animate-fade-in-up`} 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={styles.cardVisual}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImage}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.tagPill}>{service.pill}</div>
              </div>
              
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
