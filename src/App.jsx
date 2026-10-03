import { useState, useEffect } from 'react'
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  CircleHelp,
  Compass,
  GraduationCap,
  LayoutDashboard,
  Library,
  Megaphone,
  MessageCircle,
  Sparkles,
  Users,
} from 'lucide-react'
import ComingSoon from './components/ComingSoon.jsx'
import AppShell from './components/layout/AppShell.jsx'
import CourseCarousel from './components/CourseCarousel.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import AnnouncementsPage from './components/AnnouncementsPage.jsx'
import Footer from './components/layout/Footer.jsx'

const navigation = [
  {
    label: 'LEARN',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '#dashboard', active: true },
      { label: 'Browse Courses', icon: Compass, href: '#courses', expandable: true },
      { label: 'My Learning', icon: BookOpen, href: '#learning', expandable: true },
      { label: 'Resource Library', icon: Library, href: '#resources' },
    ],
  },
  {
    label: 'GROW',
    items: [
      { label: 'Learning Paths', icon: GraduationCap, href: '#paths', badge: 'NEW' },
      { label: 'Certifications', icon: Award, href: '#certifications' },
      { label: 'Career Toolkit', icon: BriefcaseBusiness, href: '#career' },
    ],
  },
  {
    label: 'COMMUNITY',
    items: [
      { label: 'Community', icon: Users, href: '#community' },
      { label: 'Announcements', icon: Megaphone, href: '/announcements' },
      { label: 'Events', icon: Sparkles, href: '#events', badge: '3', badgeTone: 'live' },
      { label: 'Discussions', icon: MessageCircle, href: '#discussions' },
    ],
  },
  {
    label: 'NEED HELP?',
    items: [{ label: 'Help Center', icon: CircleHelp, href: '#help' }],
  },
]

function App() {
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return '#dashboard'
    if (window.location.pathname === '/announcements' || window.location.pathname === '/announcements/') {
      return '/announcements'
    }
    return window.location.hash || '#dashboard'
  }

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute)

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname === '/announcements' || window.location.pathname === '/announcements/') {
        setCurrentRoute('/announcements')
      } else {
        setCurrentRoute(window.location.hash || '#dashboard')
      }
    }

    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const handleNavigate = (target) => {
    if (target.startsWith('/')) {
      window.history.pushState(null, '', target)
      setCurrentRoute(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', `/${target}`)
      } else {
        window.location.hash = target
      }
      setCurrentRoute(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isAnnouncements = currentRoute === '/announcements' || currentRoute === '#announcements'
  const isHome =
    !isAnnouncements &&
    (currentRoute === '#dashboard' ||
      currentRoute === '' ||
      currentRoute === '#' ||
      currentRoute === '#home' ||
      currentRoute === '#top')

  const activeNavigation = navigation.map((group) => ({
    ...group,
    items: group.items.map((item) => {
      const isActive =
        item.href === '/announcements'
          ? isAnnouncements
          : item.href === '#dashboard'
          ? isHome
          : !isAnnouncements && item.href === currentRoute

      return {
        ...item,
        active: isActive,
        onClick: (e) => {
          if (item.href.startsWith('/')) {
            e.preventDefault()
            handleNavigate(item.href)
          } else if (window.location.pathname !== '/') {
            e.preventDefault()
            handleNavigate(item.href)
          }
        },
      }
    }),
  }))

  return (
    <AppShell navigation={activeNavigation} currentHash={currentRoute}>
      {isHome ? (
        <>
          <HeroBanner />
          <CourseCarousel />
        </>
      ) : isAnnouncements ? (
        <AnnouncementsPage onNavigate={handleNavigate} />
      ) : (
        <ComingSoon title={navigation.flatMap((g) => g.items).find((i) => i.href === currentRoute)?.label || 'Coming Soon'} />
      )}
      <Footer />
    </AppShell>
  )
}

export default App
