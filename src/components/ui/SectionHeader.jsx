export default function SectionHeader({ icon: Icon, title, tabs, actions, className = '' }) {
  return (
    <div className={`ui-section-header ${className}`}>
      <div className="ui-section-header__title">
        {Icon && <Icon aria-hidden="true" />}
        <h2>{title}</h2>
      </div>
      {tabs}
      {actions && <div className="ui-section-header__actions">{actions}</div>}
    </div>
  )
}
