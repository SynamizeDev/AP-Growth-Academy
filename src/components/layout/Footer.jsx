import { ChevronUp, ShieldCheck } from 'lucide-react'
import Brand from './Brand.jsx'

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.26-8.3L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.44 4.05H6.58L17.8 19.84Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  )
}

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.03c-.13.58-.47.72-.95.45l-2.61-1.92-1.26 1.22c-.14.14-.26.26-.53.26l.19-2.67 4.86-4.39c.21-.19-.05-.29-.32-.11l-6.01 3.78-2.58-.81c-.56-.18-.57-.56.12-.83l10.08-3.89c.47-.17.88.11.71.88z" />
    </svg>
  )
}

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="app-footer" aria-label="AP Growth Academy Footer">
      <div className="app-footer__container">
        {/* Top Grid */}
        <div className="app-footer__grid">
          {/* Brand & Mission Column */}
          <div className="app-footer__brand-col">
            <div className="app-footer__logo">
              <Brand />
            </div>

            <p className="app-footer__text">
             AP Growth Academy, founded by Abhishek Pandey, empowers traders, sales professionals, and digital entrepreneurs worldwide through expert mentorship, practical learning, and growth-driven strategies. We are committed to helping aspiring individuals build the right mindset, develop essential skills, and unlock their full potential.
            </p>

            <p className="app-footer__subtext">
              All educational materials, technical blueprints, and live masterclasses are developed strictly for skill development and educational purposes.
            </p>

            <div className="app-footer__badges">
              <div className="app-footer__trust-badge">
                <div className="app-footer__badge-icon">
                  <ShieldCheck className="w-4 h-4 text-[#72f238]" />
                </div>
                <div className="app-footer__badge-text">
                  <span className="app-footer__badge-status">VALIDATED</span>
                  <span className="app-footer__badge-label">Verified Academy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 1: About */}
          <div className="app-footer__col">
            <h3 className="app-footer__title">ABOUT US</h3>
            <ul className="app-footer__links">
              <li><a href="#philosophy">Our Mission & Founder</a></li>
              <li><a href="#terms">Terms and Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#refund">Cancellation and Refund Policy</a></li>
              <li><a href="#disclaimer">Risk Warning & Disclaimer</a></li>
              <li><a href="#ethics">Student Honor Code</a></li>
            </ul>
          </div>

          {/* Column 2: Academy */}
          <div className="app-footer__col">
            <h3 className="app-footer__title">ACADEMY</h3>
            <ul className="app-footer__links">
              <li><a href="#courses">Financial Markets & Forex</a></li>
              <li><a href="#courses">Sales Mastery & Closing</a></li>
              <li><a href="#courses">Mindset & Psychology</a></li>
              <li><a href="#courses">Business Architecture</a></li>
              <li><a href="#certifications">Certification Programs</a></li>
              <li><a href="#paths">Learning Paths</a></li>
              <li><a href="#career">Career Toolkit</a></li>
            </ul>
          </div>

          {/* Column 3: Community */}
          <div className="app-footer__col">
            <h3 className="app-footer__title">COMMUNITY</h3>
            <ul className="app-footer__links">
              <li>
                <a href="https://x.com/pandeabhishek1" target="_blank" rel="noopener noreferrer" className="app-footer__icon-link">
                  <XIcon className="w-3.5 h-3.5 text-[#cbd5e1]" />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abhishekpandey.global/?hl=en" target="_blank" rel="noopener noreferrer" className="app-footer__icon-link">
                  <InstagramIcon className="w-3.5 h-3.5 text-[#e1306c]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@abhishekpandeyofficiial" target="_blank" rel="noopener noreferrer" className="app-footer__icon-link">
                  <YouTubeIcon className="w-3.5 h-3.5 text-[#ff0000]" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/abhishekpandeyofficial1" target="_blank" rel="noopener noreferrer" className="app-footer__icon-link">
                  <TelegramIcon className="w-3.5 h-3.5 text-[#229ed9]" />
                  <span>Telegram Channel</span>
                </a>
              </li>
              <li><a href="#help">Help Centre & FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright / Language */}
        <div className="app-footer__divider" />

        <div className="app-footer__meta-row">
          <p className="app-footer__copyright">
            © 2026 AP Growth Academy. All rights reserved.
          </p>

          <button className="app-footer__lang-btn" type="button" aria-label="Select Language">
            <span className="app-footer__flag">🇬🇧</span>
            <span>English</span>
            <ChevronUp className="w-3.5 h-3.5 text-[#8a90a2]" />
          </button>
        </div>

        {/* Contact Strip */}
        <div className="app-footer__contact-strip">
          <div className="app-footer__contact-item">
            <span className="app-footer__contact-label">Support</span>
            <a href="mailto:support@apgrowthacademy.com" className="app-footer__contact-email">support@apgrowthacademy.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
