import mascot from '../../ap-mascot.png'
import elementDollar from '../../element-dollar.png'
import elementGrowth from '../../element-growth.png'
import elementKnot from '../../element-knot.png'
import elementRupees from '../../element-rupees.png'
import elementSales from '../../element-sales.png'
import elementTrade from '../../element-trade.png'
import { ArrowRight } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.26-8.3L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.44 4.05H6.58L17.8 19.84Z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  )
}

function SparkleStar({ className, color = '#54b8ff' }) {
  return (
    <svg className={`hero-sparkle ${className || ''}`} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  )
}

export default function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="AP Growth Academy Hero">
      <div className="hero-banner__card">
        {/* Visual Background Glows & Ambience */}
        <div className="hero-banner__ambient-glow" aria-hidden="true" />
        <div className="hero-banner__mesh-grid" aria-hidden="true" />

        {/* Left Side: Content & Actions */}
        <div className="hero-banner__content">

          <h1 className="hero-banner__headline">
            <span className="hero-banner__headline-top">BUILD SKILLS.</span>
            <span className="hero-banner__headline-accent">BUILD YOUR FUTURE.</span>
          </h1>

          <p className="hero-banner__tagline">
            Practical lessons in sales, mindset, business, and financial markets. Put what you learn into action.
          </p>

          <div className="hero-banner__cta-wrapper">
            <a href="#courses" className="hero-banner__cta-btn">
              <span>Explore Courses</span>
              <ArrowRight className="hero-banner__cta-arrow" aria-hidden="true" />
            </a>
          </div>

          <div className="hero-banner__connect-wrap">
            <span className="hero-banner__connect-label">Connect with Abhishek:</span>
            <nav className="hero-banner__socials" aria-label="Abhishek Pandey Social Media">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <YouTubeIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                <XIcon />
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram">
                <TelegramIcon />
              </a>
            </nav>
          </div>
        </div>

        {/* Right Side: Mascot Half-Body + Custom 3D Floating Elements */}
        <div className="hero-banner__visual" aria-hidden="true">
          {/* Spotlight behind mascot */}
          <div className="hero-banner__spotlight" />

          {/* 3D Floating Assets */}
          {/* 1. Golden Growth Momentum Arrow */}
          <div className="hero-element hero-element--growth" title="Growth Momentum">
            <img src={elementGrowth} alt="" width="1024" height="1024" loading="eager" />
          </div>

          {/* 2. Candlestick Trading Chart with Azure Wave */}
          <div className="hero-element hero-element--trade" title="Financial Markets">
            <img src={elementTrade} alt="" width="1024" height="1024" loading="eager" />
          </div>

          {/* 3. Gold & Liquid Crystal Dollar */}
          <div className="hero-element hero-element--dollar" title="Wealth & Dollar">
            <img src={elementDollar} alt="" width="1024" height="1024" loading="eager" />
          </div>

          {/* 4. Gold & Liquid Crystal Rupee */}
          <div className="hero-element hero-element--rupees" title="Wealth & Rupee">
            <img src={elementRupees} alt="" width="1024" height="1024" loading="eager" />
          </div>

          {/* 5. Gold & Glass Interlocking Sales Rings */}
          <div className="hero-element hero-element--sales" title="Sales Mastery">
            <img src={elementSales} alt="" width="1024" height="1024" loading="eager" />
          </div>

          {/* 6. Dynamic Fluid Golden Knot Ribbon */}
          <div className="hero-element hero-element--knot" title="Mindset & Mastery">
            <img src={elementKnot} alt="" width="1024" height="1024" loading="eager" />
          </div>

          {/* Ambient Sparkles */}
          <SparkleStar className="hero-star--1" color="#54b8ff" />
          <SparkleStar className="hero-star--2" color="#ffd166" />
          <SparkleStar className="hero-star--3" color="#38bdf8" />

          {/* Mascot Half-Body Frame */}
          <div className="hero-banner__mascot-frame">
            <img
              src={mascot}
              alt="Abhishek Pandey"
              className="hero-banner__mascot-img"
              width="941"
              height="1672"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
