import React from 'react';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 600;
const section = { marginBottom: isMobile ? '20px' : '32px' };
const card = isMobile
  ? {
      background: '#fff',
      padding: '8px',
      margin: '0',
      fontFamily: 'system-ui, sans-serif',
      color: '#222',
      fontSize: '15px',
      lineHeight: 1.6,
    }
  : {
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      borderRadius: '12px',
      padding: '32px',
      margin: 'auto',
      fontFamily: 'system-ui, sans-serif',
      color: '#222',
      fontSize: '17px',
      lineHeight: 1.6,
    };
const h1 = { textAlign: 'center' as const, marginBottom: isMobile ? 16 : 24, fontSize: isMobile ? '1.5rem' : '2rem' };
const h2 = { color: '#007bff', marginBottom: isMobile ? 8 : 12, marginTop: isMobile ? 20 : 32, fontSize: isMobile ? '1.1rem' : '1.3rem' };
const highlight = {
  background: '#e3f2fd',
  border: '1px solid #90caf9',
  color: '#0d47a1',
  padding: isMobile ? '10px' : '16px',
  borderRadius: '8px',
  margin: isMobile ? '10px 0' : '16px 0',
  fontWeight: 500,
  fontSize: isMobile ? '0.98rem' : '1rem',
};
const warning = {
  background: '#fff3cd',
  border: '1px solid #ffeeba',
  color: '#856404',
  padding: isMobile ? '10px' : '16px',
  borderRadius: '8px',
  margin: isMobile ? '10px 0' : '16px 0',
  fontWeight: 500,
  fontSize: isMobile ? '0.98rem' : '1rem',
};
const button = {
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  padding: isMobile ? '8px 16px' : '10px 20px',
  fontSize: isMobile ? '1rem' : '1.1rem',
  cursor: 'pointer',
  marginTop: isMobile ? '10px' : '16px',
  textDecoration: 'none',
  display: 'inline-block',
};

const TermsOfService: React.FC = () => (
  <div>
    <div style={card}>
      <h1 style={h1}>Terms of Service</h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: isMobile ? 18 : 32, fontSize: isMobile ? '0.98rem' : '1rem' }}>
        Effective Date: June 25, 2025
      </p>
      <div style={highlight}>
        Welcome to TOEIC Duel. By accessing or using our application, you agree to be bound by these Terms of Service. Please read them carefully before using our services. These terms are designed to ensure a safe, fair, and transparent experience for all users. If you have any questions, please contact us at the email provided below.
      </div>
      {/* Definitions */}
      <div style={section}>
        <h2 style={h2}>1. Definitions</h2>
        <ul>
          <li><b>“Service”</b> refers to the TOEIC Duel application, website, and all related features, content, and services provided by us.</li>
          <li><b>“User”</b> refers to any individual or entity who accesses or uses the Service, whether registered or not.</li>
          <li><b>“We”, “Us”, “Our”</b> refers to the TOEIC Duel development team and its authorized representatives.</li>
          <li><b>“Content”</b> means all text, images, audio, video, and other materials available through the Service.</li>
        </ul>
        <p>These definitions apply throughout these Terms of Service and are intended to clarify the meaning of key terms.</p>
      </div>
      {/* Acceptance of Terms */}
      <div style={section}>
        <h2 style={h2}>2. Acceptance of Terms</h2>
        <ul>
          <li>By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</li>
          <li>If you do not agree to these terms, you must not use the Service. Continued use of the Service after changes to the Terms constitutes acceptance of those changes.</li>
        </ul>
        <p>We recommend that you review these Terms regularly to stay informed of any updates.</p>
      </div>
      {/* User Responsibilities */}
      <div style={section}>
        <h2 style={h2}>3. User Responsibilities</h2>
        <ul>
          <li>You agree to use the Service only for lawful purposes and in accordance with these Terms.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
          <li>You must not:
            <ul>
              <li>Use the Service in any way that violates applicable laws or regulations.</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
              <li>Engage in any activity that could harm, disable, overburden, or impair the Service or interfere with any other party’s use of the Service.</li>
              <li>Attempt to gain unauthorized access to any part of the Service, accounts, computer systems, or networks connected to the Service.</li>
              <li>Transmit any viruses, malware, or other harmful code.</li>
              <li>Collect or store personal data about other users without their express permission.</li>
              <li>Use the Service to harass, abuse, or harm another person or group.</li>
            </ul>
          </li>
        </ul>
        <p>Violation of these responsibilities may result in suspension or termination of your account and access to the Service.</p>
      </div>
      {/* Intellectual Property */}
      <div style={section}>
        <h2 style={h2}>4. Intellectual Property</h2>
        <ul>
          <li>All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of the TOEIC Duel development team or its licensors and are protected by copyright, trademark, and other intellectual property laws.</li>
          <li>You may not copy, modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content or information obtained from the Service without our prior written consent.</li>
          <li>Any unauthorized use of the Service or its content may violate copyright, trademark, and other laws and could result in criminal or civil penalties.</li>
        </ul>
      </div>
      {/* Third-Party Services */}
      <div style={section}>
        <h2 style={h2}>5. Third-Party Services</h2>
        <ul>
          <li>The Service may contain links to or integrate with third-party websites, products, or services (such as Supabase for data storage). These third-party services are not controlled by us, and we are not responsible for their content, privacy policies, or practices.</li>
          <li>Your use of third-party services is subject to their own terms and policies. We encourage you to review those terms before using such services.</li>
          <li>We do not endorse or assume any responsibility for any third-party services, and your interactions with such services are solely between you and the third party.</li>
        </ul>
      </div>
      {/* Account Termination & Suspension */}
      <div style={section}>
        <h2 style={h2}>6. Account Termination & Suspension</h2>
        <ul>
          <li>We reserve the right, at our sole discretion, to suspend or terminate your account and access to the Service at any time, with or without notice, for any reason, including but not limited to violation of these Terms.</li>
          <li>In most cases, we will attempt to notify you via email if your account is suspended or terminated. However, we are not obligated to provide notice in all circumstances.</li>
          <li>If you believe your account was terminated or suspended in error, you may contact us to request a review. We will consider your request but are not obligated to reinstate your account.</li>
          <li>Upon termination, your right to use the Service will immediately cease, and you may lose access to any content or information associated with your account.</li>
        </ul>
        <p>We are not liable for any loss or damage arising from the suspension or termination of your account.</p>
      </div>
      {/* Disclaimer & Limitation of Liability */}
      <div style={section}>
        <h2 style={h2}>7. Disclaimer & Limitation of Liability</h2>
        <div style={warning}>
          TOEIC Duel is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </div>
        <ul>
          <li>We are not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of or inability to use the Service, even if we have been advised of the possibility of such damages.</li>
          <li>Your sole and exclusive remedy for dissatisfaction with the Service is to stop using the Service.</li>
        </ul>
      </div>
      {/* Governing Law */}
      <div style={section}>
        <h2 style={h2}>8. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of Vietnam, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or the Service will be subject to the exclusive jurisdiction of the courts located in Vietnam.
        </p>
      </div>
      {/* Changes to Terms */}
      <div style={section}>
        <h2 style={h2}>9. Changes to Terms</h2>
        <ul>
          <li>We may update or modify these Terms of Service at any time, at our sole discretion. Any changes will be effective immediately upon posting the revised Terms on this page, unless otherwise stated.</li>
          <li>It is your responsibility to review these Terms periodically. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.</li>
        </ul>
      </div>
      {/* Severability */}
      <div style={section}>
        <h2 style={h2}>10. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will remain in full force and effect. The invalid or unenforceable provision will be replaced by a valid, enforceable provision that most closely matches the intent of the original provision.
        </p>
      </div>
      {/* Entire Agreement */}
      <div style={section}>
        <h2 style={h2}>11. Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between you and us regarding your use of the Service and supersede all prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us.
        </p>
      </div>
      {/* Contact */}
      <div style={section}>
        <h2 style={h2}>12. Contact Us</h2>
        <p>If you have any questions, concerns, or feedback about these Terms of Service or the Service, please contact us at:</p>
        <ul>
          <li>Email: <a href="mailto:trandinhvan102210@gmail.com">trandinhvan102210@gmail.com</a></li>
        </ul>
        <a href="mailto:trandinhvan102210@gmail.com" style={button}>Contact Support</a>
      </div>
      <div style={{ ...highlight, background: '#e8f5e9', color: '#1b5e20', border: '1px solid #81c784' }}>
        <b>Commitment:</b> We are committed to providing a safe, fair, and transparent service for all users. Please use TOEIC Duel responsibly and respectfully. We value your trust and strive to continuously improve our Service for your benefit.
      </div>
    </div>
  </div>
);

export default TermsOfService; 