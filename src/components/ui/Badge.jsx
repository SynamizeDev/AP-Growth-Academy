export default function Badge({ children, tone = 'neutral', dot = false, className = '' }) {
  return (
    <span className={`ui-badge ui-badge--${tone} ${className}`}>
      {dot && <i aria-hidden="true" />}
      {children}
    </span>
  )
}
