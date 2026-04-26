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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialization trigger
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (window.location.pathname !== "/") {
      window.location.href = href;
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
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        
        {/* Left Side: Logo */}
        <Link href="/#home" onClick={(e) => handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "/#home")} className={styles.logoWrapper}>
          <div className={styles.logoImageWrapper}>
            <Image src="/logo.png" alt="Axiom Rise Logo" width={256} height={256} priority className={styles.logoImage} />
          </div>
          <div className={styles.logoTextWrapper}>
            <span className={styles.brandName}>Axiom Rise</span>
            <span className={styles.brandTagline}>TALENT & HR SOLUTIONS</span>
          </div>
        </Link>

        {/* Right Side: Nav Links (Desktop) */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`${styles.navLink} ${activeHash === link.href ? styles.activeLink : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleScrollTo(e, "/#contact")}
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
            onClick={(e) => handleScrollTo(e, link.href)}
            className={styles.mobileNavLink}
          >
            {link.name}
          </a>
        ))}
        <a
          href="/#contact"
          onClick={(e) => handleScrollTo(e, "/#contact")}
          className={styles.mobileCtaButton}
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
}
