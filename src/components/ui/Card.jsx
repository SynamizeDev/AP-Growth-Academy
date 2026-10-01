export default function Card({ children, variant = 'default', className = '', as: Element = 'div', ...props }) {
  return <Element className={`ui-card ui-card--${variant} ${className}`} {...props}>{children}</Element>
}

export function CardHeader({ icon: Icon, title, action, children, className = '' }) {
  return (
    <div className={`ui-card__header ${className}`}>
      <div className="ui-card__title">
        {Icon && <Icon aria-hidden="true" />}
        {title && <h3>{title}</h3>}
        {children}
      </div>
      {action && <div className="ui-card__action">{action}</div>}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return <div className={`ui-card__body ${className}`}>{children}</div>
}
