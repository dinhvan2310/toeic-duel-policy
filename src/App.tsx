import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Policy from './pages/Policy';
import DeleteAccountGuide from './pages/DeleteAccountGuide';
import TermsOfService from './pages/TermsOfService';
import './App.css';

function Home() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <h1>TOEIC Duel App</h1>
      <p>Welcome to the TOEIC Duel App! Use the navigation links below:</p>
      <ul>
        <li><Link to="/policy">Privacy Policy</Link></li>
        <li><Link to="/terms-of-service">Terms of Service</Link></li>
        <li><Link to="/delete-account-guide">Account Deletion Guide</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/delete-account-guide" element={<DeleteAccountGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
