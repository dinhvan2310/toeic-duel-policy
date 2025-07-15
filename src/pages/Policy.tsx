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

const Policy: React.FC = () => (
  <div>
    <div style={card}>
      <h1 style={h1}>Privacy Policy</h1>
      <p style={{ textAlign: 'center' as const, color: '#888', marginBottom: isMobile ? 18 : 32, fontSize: isMobile ? '0.98rem' : '1rem' }}>Effective Date: June 25, 2025</p>
      <div style={highlight}>
        At TOEIC Duel, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application and services. By using TOEIC Duel, you agree to the practices described in this policy.
      </div>
      <div style={section}>
        <h2 style={h2}>1. Information We Collect</h2>
        <ul>
          <li><b>Personal Information:</b> When you register, we collect your email address, full name, and optionally, an avatar URL.</li>
          <li><b>Usage Data:</b> We collect information about your interactions with the app, such as practice sessions, quiz results, vocabulary collections, and chatbot conversations.</li>
          <li><b>Device Information:</b> We may collect device details like app version and device type to optimize performance.</li>
          <li><b>User Feedback:</b> Any feedback or suggestions you submit through the app’s feedback feature.</li>
          <li><b>Device & Sensitive Data:</b> <u>We do NOT access or collect sensitive device data</u> such as contacts, SMS, photos, camera, microphone, or precise location. If future features require such access, we will request your explicit consent and explain the purpose clearly.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>2. How We Use Your Information</h2>
        <ul>
          <li>Provide and personalize TOEIC practice features, such as quizzes and vocabulary collections.</li>
          <li>Enable chatbot interactions for learning support.</li>
          <li>Track your learning progress and provide insights via statistics and charts.</li>
          <li>Improve our app’s functionality and user experience.</li>
          <li>Respond to your feedback and support requests.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>3. Data Sharing</h2>
        <ul>
          <li>We do not sell or share your personal information with third parties, except:</li>
          <li>With service providers (e.g., Supabase for data storage) who are contractually obligated to protect your data.</li>
          <li>To comply with legal obligations or protect our rights.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>4. Data Security</h2>
        <ul>
          <li>We implement industry-standard security measures, including encryption and access controls, to protect your data.</li>
          <li>Access to your data is restricted to authorized personnel only.</li>
          <li>We regularly review our security practices to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>5. Your Rights</h2>
        <ul>
          <li>You have the right to access or update your personal information at any time.</li>
          <li>To request deletion of your account or personal data, please send an email to our support team at <a href="mailto:trandinhvan102210@gmail.com">trandinhvan102210@gmail.com</a>.</li>
          <li>We will process your request and delete or anonymize your data within 30 days, unless a longer retention period is required by law.</li>
          <li>You may opt out of marketing communications at any time.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>6. Cookies and Tracking</h2>
        <ul>
          <li>Our web admin panel may use cookies for session management. The mobile app does not use cookies but may use similar technologies for analytics. You can manage these settings in your device or browser.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>7. Third-Party Services</h2>
        <ul>
          <li>We use third-party services like Supabase, which have their own privacy policies. We recommend reviewing their policies:</li>
          <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a></li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>8. Data Retention & Deletion</h2>
        <ul>
          <li>We retain your personal data as long as necessary to provide services and fulfill legal obligations.</li>
          <li>To request deletion of your data or account, please email <a href="mailto:trandinhvan102210@gmail.com">trandinhvan102210@gmail.com</a>. There is currently no in-app option to delete your account directly.</li>
          <li>After receiving a valid request, we will delete or anonymize your data within 30 days, unless required by law to retain it longer.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>9. Children's Privacy & Parental Guidance</h2>
        <div style={warning}>
          <b>Notice:</b> TOEIC Duel is designed for all age groups (Rated for 3+). We do not knowingly collect personal information from children. Parents and guardians are encouraged to supervise their children’s use of the app. If you believe your child has provided us with personal data, please contact us at <a href="mailto:trandinhvan102210@gmail.com">trandinhvan102210@gmail.com</a> and we will promptly remove such information.
        </div>
        <ul>
          <li>All content in the app is educational and family-friendly.</li>
          <li>We encourage parents and guardians to monitor and guide their children's use of the app.</li>
          <li>If we discover that we have collected personal information from a child without parental consent, we will promptly delete such data.</li>
          <li>For more information, please review Google Play's <a href="https://support.google.com/googleplay/android-developer/answer/9283445?hl=en" target="_blank" rel="noopener noreferrer">User Data Policy</a>.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of the app after changes constitutes acceptance of the revised policy.
        </p>
      </div>
      <div style={section}>
        <h2 style={h2}>11. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>Email: <a href="mailto:trandinhvan102210@gmail.com">trandinhvan102210@gmail.com</a></li>
        </ul>
        <a href="mailto:trandinhvan102210@gmail.com" style={button}>Contact Support</a>
      </div>
      <div style={{ ...highlight, background: '#e8f5e9', color: '#1b5e20', border: '1px solid #81c784' }}>
        <b>Commitment:</b> We are committed to protecting your privacy and ensuring your data is handled responsibly and transparently. We strictly comply with all applicable privacy laws and Google Play requirements.
      </div>
    </div>
  </div>
);

export default Policy; 