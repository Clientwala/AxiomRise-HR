import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/components/Legal.module.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Axiom Rise",
  description: "Terms of Service and usage guidelines for Axiom Rise Pte. Ltd.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className={styles.legalSection}>
        <div className={`container ${styles.contentWrapper} animate-fade-in-up`}>
          <h1 className={styles.title}>Terms of Service</h1>
          <span className={styles.lastUpdated}>Last Updated: April 2026</span>
          
          <div className={styles.legalBody}>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Axiom Rise Pte. Ltd. ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form related or connected thereto (collectively, the "Site").
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing the Site, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and must discontinue use immediately.
            </p>

            <h2>2. Our IT Services</h2>
            <p>
              The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation. All IT consulting, managed services, and resource augmentation services are subject to specific Master Service Agreements (MSA) negotiated independently from this website.
            </p>

            <h2>3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>

            <h2>4. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that:
            </p>
            <ul>
              <li>All registration or contact information you submit will be true, accurate, current, and complete.</li>
              <li>You will not access the Site through automated or non-human means bypassing our standard interactions.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of Singapore. Axiom Rise Pte. Ltd. and yourself irrevocably consent that the courts of Singapore shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <p>
              <strong>Axiom Rise Pte. Ltd.</strong><br/>
              Email: <a href="mailto:Info@axiomrise.sg">Info@axiomrise.sg</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
