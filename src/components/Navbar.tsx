"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("/#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // ScrollSpy logic to determine active section
      const sections = ['home', 'about', 'services', 'contact'];
      let current = "/#home";
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = "/#" + id;
        }
      }
      setActiveHash(current);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (href && (href.startsWith('#') || href.startsWith('/#'))) {
        e.preventDefault();
        setMobileMenuOpen(false);
        
        if (window.location.pathname !== "/") {
           window.location.href = href.startsWith('/') ? href : `/${href}`;
           return;
        }

        const targetId = href.replace('/', '');
        const element = document.querySelector(targetId);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleGlobalClick);
    handleScroll(); // Initialization trigger
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact Us", href: "/#contact" },
  ];

  // Global interceptor handles scrolling now.

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        
        {/* Left Side: Logo */}
        <a href="/#home" className={styles.logoWrapper}>
          <div className={styles.logoImageWrapper}>
            <Image src="/logo.png" alt="Axiom Rise Logo" width={256} height={256} priority className={styles.logoImage} />
          </div>
          <div className={styles.logoTextWrapper}>
            <span className={styles.brandName}>Axiom Rise</span>
            <span className={styles.brandTagline}>TALENT & HR SOLUTIONS</span>
          </div>
        </a>

        {/* Right Side: Nav Links (Desktop) */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${styles.navLink} ${activeHash === link.href ? styles.activeLink : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className={styles.ctaButton}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Droplink */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={styles.mobileNavLink}
          >
            {link.name}
          </a>
        ))}
        <a
          href="/#contact"
          className={styles.mobileCtaButton}
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
}
