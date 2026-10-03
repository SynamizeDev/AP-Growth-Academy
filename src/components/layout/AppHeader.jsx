import { Menu } from 'lucide-react'
import Brand from './Brand.jsx'
import Button from '../ui/Button.jsx'

export default function AppHeader({ onToggleSidebar }) {
  return (
    <header className="app-header fixed inset-x-0 top-0 z-50 h-16 border-b border-clutch-border bg-clutch-surface/95 backdrop-blur-xl">
      <div className="app-header__inner flex h-full w-full items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4">
        <div className="app-header__left flex items-center gap-2 min-w-0">
          <Button
            variant="outline-muted"
            size="square"
            iconOnly
            className="app-header__menu shrink-0"
            onClick={onToggleSidebar}
            aria-label="Toggle navigation"
          >
            <Menu aria-hidden="true" />
          </Button>
          <Brand />
        </div>

        <div className="app-header__actions flex items-center gap-2 shrink-0">
          <Button
            as="a"
            href="#contact"
            variant="outline"
            className="app-header__btn-contact hidden sm:inline-flex"
          >
            Contact
          </Button>
          <Button
            as="a"
            href="#start"
            variant="secondary"
            className="app-header__btn-cta"
          >
            Let's talk
          </Button>
        </div>
      </div>
    </header>
  )
}
