import { Menu } from 'lucide-react'
import Brand from './Brand.jsx'
import Button from '../ui/Button.jsx'

export default function AppHeader({ onToggleSidebar }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-19 border-b border-clutch-border bg-clutch-surface/95 backdrop-blur-xl">
      <div className="flex h-full w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="outline-muted"
            size="square"
            iconOnly
            className="app-header__menu"
            onClick={onToggleSidebar}
            aria-label="Toggle navigation"
          >
            <Menu aria-hidden="true" />
          </Button>
          <Brand />
        </div>

        <div className="flex items-center gap-2">
          <Button as="a" href="#contact" variant="outline" className="hidden sm:inline-flex">
            Contact
          </Button>
          <Button as="a" href="#start" variant="secondary">
            Let's talk
          </Button>
        </div>
      </div>
    </header>
  )
}
