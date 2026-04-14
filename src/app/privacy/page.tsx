import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/components/Legal.module.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Axiom Rise",
  description: "Privacy Policy and data protection guidelines for Axiom Rise Pte. Ltd.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className={styles.legalSection}>
        <div className={`container ${styles.contentWrapper} animate-fade-in-up`}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <span className={styles.lastUpdated}>Last Updated: April 2026</span>
          
          <div className={styles.legalBody}>
            <p>
              Axiom Rise Pte. Ltd. ("we," "us," or "our") is committed to protecting the privacy and security of your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (the "Site") or engage with our IT consulting, support, and managed services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, corporate email address, and telephone number, that you voluntarily give to us when choosing to engage our services or fill out a contact form.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, and access times (handled strictly via our secure MongoDB tracking facility).</li>
              <li><strong>Cookies:</strong> We use cookies to offer you a better browsing experience and analyze site traffic as detailed in our consent banner.</li>
            </ul>

            <h2>2. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected via the Site to:
            </p>
            <ul>
              <li>Deliver targeted IT solutions and managed service propositions to you.</li>
              <li>Improve and optimize our website and user experience.</li>
              <li>Respond to your direct inquiries submitted through our contact forms.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>
              We respect your privacy and will not share your personal data with third parties except under the following strict scenarios:
            </p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with trusted third parties that perform services for us to maintain operational excellence, ensuring they are bound by strict non-disclosure directives.</li>
            </ul>

            <h2>4. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Axiom Rise Pte. Ltd.</strong><br/>
              336 Smith Street, #05-301<br/>
              New Bridge Centre<br/>
              Singapore 050336<br/>
              Email: <a href="mailto:Info@axiomrise.sg">Info@axiomrise.sg</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
