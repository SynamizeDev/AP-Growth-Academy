import { useEffect, useState } from 'react'
import AppHeader from './AppHeader.jsx'
import Sidebar from './Sidebar.jsx'

export default function AppShell({ navigation, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <div className={`app-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`} id="top">
      <AppHeader
        onToggleSidebar={() => {
          setSidebarCollapsed((prev) => !prev)
          setMenuOpen((prev) => !prev)
        }}
      />
      <Sidebar
        groups={navigation}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <main className="app-main">{children}</main>
    </div>
  )
}
