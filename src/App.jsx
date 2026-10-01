import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  CircleHelp,
  Compass,
  GraduationCap,
  LayoutDashboard,
  Library,
  MessageCircle,
  Sparkles,
  Users,
} from 'lucide-react'
import AppShell from './components/layout/AppShell.jsx'
import CourseCarousel from './components/CourseCarousel.jsx'
import HeroBanner from './components/HeroBanner.jsx'
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
  return (
    <AppShell navigation={navigation}>
      <HeroBanner />
      <CourseCarousel />
      <Footer />
    </AppShell>
  )
}

export default App
