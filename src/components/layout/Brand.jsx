import logo from '../../../logo.svg'

export default function Brand({ className = '' }) {
  const handleClick = (e) => {
    e.preventDefault()
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/#dashboard')
      window.dispatchEvent(new PopStateEvent('popstate'))
    } else {
      window.location.hash = '#dashboard'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      className={`inline-flex shrink-0 items-center ${className}`}
      href="#dashboard"
      onClick={handleClick}
      aria-label="AP Growth Academy home"
    >
      <img
        src={logo}
        alt="AP Growth Academy"
        className="brand-logo"
        width="994"
        height="282"
      />
    </a>
  )
}
