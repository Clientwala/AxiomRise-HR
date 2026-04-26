import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Axiom Rise - IT Recruitment & Talent Solutions",
    "image": "https://axiomrise.sg/logo.png",
    "@id": "https://axiomrise.sg",
    "url": "https://axiomrise.sg",
    "telephone": "+6588061585",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "336 Smith Street, #05-301, New Bridge Centre",
      "addressLocality": "Singapore",
      "postalCode": "050336",
      "addressCountry": "SG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.282302,
      "longitude": 103.844391
    },
    "sameAs": [
      "https://axiomrise.sg"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
