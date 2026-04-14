"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";
import { Info } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Cannot toggle
    analytics: true,
    functional: true
  });

  useEffect(() => {
    // Check if user already gave or declined consent
    const consent = localStorage.getItem("axiomrise_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const getSystemInfo = () => {
    const ua = navigator.userAgent;
    
    // Basic OS extraction
    let os = "Unknown OS";
    if (ua.indexOf("Win") !== -1) os = "Windows";
    if (ua.indexOf("Mac") !== -1) os = "MacOS";
    if (ua.indexOf("Linux") !== -1) os = "Linux";
    if (ua.indexOf("Android") !== -1) os = "Android";
    if (ua.indexOf("like Mac") !== -1) os = "iOS";

    // Basic Browser extraction
    let browser = "Unknown Browser";
    if (ua.indexOf("Chrome") !== -1 || ua.indexOf("CriOS") !== -1) browser = "Chrome";
    else if (ua.indexOf("Safari") !== -1) browser = "Safari";
    else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
    else if (ua.indexOf("MSIE") !== -1 || ua.indexOf("Trident/") !== -1) browser = "Internet Explorer";
    else if (ua.indexOf("Edge") !== -1 || ua.indexOf("Edg/") !== -1) browser = "Edge";
    
    // Device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const deviceType = isMobile ? "mobile" : "desktop";

    return {
      userAgent: ua,
      browser,
      os,
      deviceType,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer || "direct",
      currentUrl: window.location.href,
    };
  };

  const handleAction = async (consentGiven: boolean | 'custom') => {
    setIsVisible(false);
    
    // Determine the final payload
    let finalPrefs = { essential: true, analytics: false, functional: false };
    
    if (consentGiven === true) {
      finalPrefs = { essential: true, analytics: true, functional: true };
    } else if (consentGiven === 'custom') {
      finalPrefs = preferences;
    }

    localStorage.setItem("axiomrise_cookie_consent", JSON.stringify(finalPrefs));

    // Only gather analytics if the user allowed it
    if (finalPrefs.analytics) {
      const metrics = { ...getSystemInfo(), consentGiven };

      // Send to backend analytics anonymously
      try {
        await fetch("/api/tracking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(metrics),
        });
      } catch (e) {
        console.error("Failed to sync analytics", e);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <div className={styles.infoWrapper}>
            <Info size={24} className={styles.iconGold} />
            <div className={styles.textWrapper}>
              <h4>We Value Your Privacy & Experience</h4>
              <p>
                We use cookies to improve website performance, understand our audience, and provide a better consulting experience.
              </p>
            </div>
          </div>
          <div className={styles.btnGroup}>
            <button onClick={() => setShowCustomize(true)} className={styles.declineBtn}>
              Customize
            </button>
            <button onClick={() => handleAction(true)} className={styles.acceptBtn}>
              Accept All
            </button>
          </div>
        </div>
      </div>

      {showCustomize && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Cookie Preferences</h3>
            <p className={styles.modalDesc}>Configure how we collect and use your data.</p>
            
            <div className={styles.toggleGroup}>
              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <strong>Essential Cookies</strong>
                  <p>Strictly necessary for running the website.</p>
                </div>
                <div className={`${styles.switch} ${styles.switchDisabled}`}>
                  <div className={`${styles.slider} ${styles.sliderOn}`}></div>
                </div>
              </div>

              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <strong>Analytics & Tracking</strong>
                  <p>Helps us analyze traffic and improve system UX.</p>
                </div>
                <div 
                  className={styles.switch} 
                  onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                >
                  <div className={`${styles.slider} ${preferences.analytics ? styles.sliderOn : ''}`}></div>
                </div>
              </div>

              <div className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <strong>Functional Cookies</strong>
                  <p>Remembers local preferences, UI states, and history.</p>
                </div>
                <div 
                  className={styles.switch} 
                  onClick={() => setPreferences({...preferences, functional: !preferences.functional})}
                >
                  <div className={`${styles.slider} ${preferences.functional ? styles.sliderOn : ''}`}></div>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button onClick={() => handleAction(false)} className={styles.declineBtn}>Decline All</button>
              <button onClick={() => handleAction('custom')} className={styles.acceptBtn}>Save Preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
