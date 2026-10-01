import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import businessBuilding from '../../business-building.png'
import financialMarkets from '../../financial-markets.png'
import mindsetMastery from '../../mindset-mastery.png'
import salesMastery from '../../sales-mastery.png'
import Button from './ui/Button.jsx'

const courses = [
  { title: 'Business Building', image: businessBuilding, href: '#business-building' },
  { title: 'Financial Markets', image: financialMarkets, href: '#financial-markets' },
  { title: 'Mindset Mastery', image: mindsetMastery, href: '#mindset-mastery' },
  { title: 'Sales Mastery', image: salesMastery, href: '#sales-mastery' },
]

export default function CourseCarousel() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  const move = useCallback((direction = 1) => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector('.course-slide')
    if (!card) return

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
    const step = card.getBoundingClientRect().width + gap
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4
    const atStart = track.scrollLeft <= 4

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: step * direction, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduceMotion) return undefined

    const timer = window.setInterval(() => move(1), 4000)
    return () => window.clearInterval(timer)
  }, [move, paused])

  return (
    <section className="course-carousel" aria-label="Featured courses">
      <div className="course-carousel__header">
        <h1>Featured courses</h1>
        <div className="course-carousel__controls" aria-label="Course carousel controls">
          <Button variant="light" size="square" iconOnly onClick={() => move(-1)} aria-label="Previous courses">
            <ChevronLeft aria-hidden="true" />
          </Button>
          <Button variant="light" size="square" iconOnly onClick={() => move(1)} aria-label="Next courses">
            <ChevronRight aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="course-carousel__track"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
        }}
      >
        {courses.map((course) => (
          <a className="course-slide" href={course.href} key={course.title} aria-label={`Explore ${course.title}`}>
            <img src={course.image} alt={course.title} width="1620" height="971" draggable="false" />
          </a>
        ))}
      </div>
    </section>
  )
}
