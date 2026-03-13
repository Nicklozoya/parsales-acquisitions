import './App.css'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import ProcessPage from './pages/ProcessPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <div className="page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">PS</span>
          <div>
            <p className="brand-name">ParSales Acquisitions</p>
            <p className="brand-tag">Land Acquisitions</p>
          </div>
        </div>
        <nav className="main-nav" aria-label="Main">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/process"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Process
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>
        <NavLink className="btn btn-light" to="/contact">
          Get My Offer
        </NavLink>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-legal">
          <p className="footer-name">ParSales Acquisitions LLC</p>
          <p>Atlanta, GA</p>
          <p>
            <a href="tel:+14045785205">(404) 578-5205</a>
          </p>
          <p>
            <a href="mailto:nickl@parsaleacquisitions.com">nickl@parsaleacquisitions.com</a>
          </p>
        </div>
        <p>
          <NavLink to="/privacy">Privacy Policy</NavLink> · <NavLink to="/terms">Terms & Conditions</NavLink>
        </p>
        <p>© {new Date().getFullYear()} ParSales Acquisitions LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
