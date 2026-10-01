import { ChevronDown, Search, X } from 'lucide-react'
import Input from '../ui/Input.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'

export default function Sidebar({ groups = [], open = false, onClose }) {
  return (
    <>
      <aside className={`app-sidebar ${open ? 'is-open' : ''}`}>
        <div className="app-sidebar__search">
          <Input aria-label="Search courses" placeholder="Search courses" leadingIcon={Search} />
          <Button variant="light" size="square" iconOnly className="app-sidebar__close" onClick={onClose} aria-label="Close navigation"><X /></Button>
        </div>
        <nav className="app-sidebar__nav" aria-label="Sidebar navigation">
          {groups.map((group) => (
            <section className="app-sidebar__group" key={group.label}>
              <h2>{group.label}</h2>
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <a href={item.href || '#'} className={item.active ? 'is-active' : ''} key={item.label}>
                    {Icon && <Icon className="app-sidebar__item-icon" aria-hidden="true" />}
                    <span>{item.label}</span>
                    {item.badge && <Badge tone={item.badgeTone || 'blue'}>{item.badge}</Badge>}
                    {item.expandable && <span className="app-sidebar__chevron"><ChevronDown /></span>}
                  </a>
                )
              })}
            </section>
          ))}
        </nav>
      </aside>
      {open && <button className="app-sidebar__scrim" onClick={onClose} aria-label="Close navigation" />}
    </>
  )
}
