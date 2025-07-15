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

const DeleteAccountGuide: React.FC = () => (
  <div>
    <div style={card}>
      <h1 style={h1}>Account Deletion Guide</h1>
      <p style={{ textAlign: 'center' as const, color: '#888', marginBottom: isMobile ? 18 : 32, fontSize: isMobile ? '0.98rem' : '1rem' }}>Last updated: July 15, 2025</p>
      <div style={highlight}>
        To delete your TOEIC Duel account and all associated data, please follow the instructions below. This process is designed to protect your privacy and ensure secure data removal.
      </div>
      <div style={section}>
        <h2 style={h2}>How to Request Account Deletion</h2>
        <ol>
          <li>Open your email client (Gmail, Outlook, etc.).</li>
          <li>Compose a new email to <a href="mailto:trandinhvan102210@gmail.com">trandinhvan102210@gmail.com</a>.</li>
          <li>Use the subject: <b>Request to Delete TOEIC Duel Account</b>.</li>
          <li>In the email body, please include your registered email address and a short request for account deletion.</li>
          <li>Send the email. Our support team will process your request and confirm via email.</li>
        </ol>
      </div>
      <div style={warning}>
        <b>Important:</b> Account deletion is <u>irreversible</u>. All your data, progress, and history will be permanently deleted within 30 days. There is currently <b>no in-app option</b> to delete your account directly.
      </div>
      <div style={section}>
        <h2 style={h2}>Frequently Asked Questions</h2>
        <ul>
          <li><b>What if I no longer have access to my registered email?</b><br />Please provide any information that can help us verify your identity in your deletion request.</li>
          <li><b>How long does it take?</b><br />We will process your request and delete or anonymize your data within 30 days, unless required by law to retain it longer.</li>
          <li><b>Can I recover my account after deletion?</b><br />No. Account deletion is permanent and cannot be undone.</li>
        </ul>
      </div>
      <div style={section}>
        <h2 style={h2}>Contact Support</h2>
        <p>
          For assistance, email us at <a href="mailto:trandinhvan102210@gmail.com">trandinhvan102210@gmail.com</a>.
        </p>
        <a href="mailto:trandinhvan102210@gmail.com" style={button}>Contact Support</a>
      </div>
      <div style={{ ...highlight, background: '#e8f5e9', color: '#1b5e20', border: '1px solid #81c784' }}>
        <b>Commitment:</b> We are committed to protecting your privacy and ensuring your data is handled responsibly and securely.
      </div>
    </div>
  </div>
);

export default DeleteAccountGuide; 