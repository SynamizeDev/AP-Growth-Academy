import { useState } from 'react'
import { Archive } from 'lucide-react'
import { announcements } from '../data/announcements.js'

export default function AnnouncementsPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('latest')

  const latestAnnouncements = announcements.filter((item) => !item.archived)
  const archivedAnnouncements = announcements.filter((item) => item.archived)

  const displayedItems = activeTab === 'latest' ? latestAnnouncements : archivedAnnouncements

  const handleActionClick = (e, item) => {
    if (item.disabled) {
      e.preventDefault()
      return
    }

    if (!item.isExternal && onNavigate && item.destination) {
      e.preventDefault()
      onNavigate(item.destination)
    }
  }

  return (
    <div className="announcements-page">
      {/* Compact Tabs */}
      <div className="announcements-tabs" role="tablist" aria-label="Announcements filter">
        <button
          type="button"
          role="tab"
          id="tab-latest"
          aria-controls="panel-latest"
          aria-selected={activeTab === 'latest'}
          className={`announcements-tab ${activeTab === 'latest' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('latest')}
        >
          Latest Announcements
        </button>
        <button
          type="button"
          role="tab"
          id="tab-archived"
          aria-controls="panel-archived"
          aria-selected={activeTab === 'archived'}
          className={`announcements-tab ${activeTab === 'archived' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('archived')}
        >
          Archived
        </button>
      </div>

      {/* Grid or Empty State */}
      <div
        role="tabpanel"
        id={activeTab === 'latest' ? 'panel-latest' : 'panel-archived'}
        aria-labelledby={activeTab === 'latest' ? 'tab-latest' : 'tab-archived'}
      >
        {displayedItems.length > 0 ? (
          <div className="announcements-grid">
            {displayedItems.map((item) => {
              const ActionTag = item.disabled ? 'span' : 'a'
              const actionProps = item.disabled
                ? { 'aria-disabled': 'true' }
                : item.isExternal
                ? { href: item.destination, target: '_blank', rel: 'noopener noreferrer' }
                : { href: item.destination, onClick: (e) => handleActionClick(e, item) }

              return (
                <article className="announcement-card" key={item.id}>
                  {/* Banner Image Container: 16:9 native aspect ratio */}
                  <div className="announcement-card__media">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="announcement-card__img"
                      width="1672"
                      height="941"
                      loading="lazy"
                    />
                  </div>

                  {/* Compact Information Strip */}
                  <div className="announcement-card__footer">
                    <div className="announcement-card__info">
                      <span className="announcement-card__category">{item.category}</span>
                      <h2 className="announcement-card__title" title={item.title}>
                        {item.title}
                      </h2>
                    </div>

                    <ActionTag
                      {...actionProps}
                      className={`announcement-card__action ${item.disabled ? 'is-disabled' : ''}`}
                    >
                      {item.actionLabel}
                    </ActionTag>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="announcements-empty" role="status">
            <Archive className="announcements-empty__icon" aria-hidden="true" />
            <h2 className="announcements-empty__title">No archived announcements yet.</h2>
            <p className="announcements-empty__desc">
              All active announcements are currently displayed under the Latest Announcements tab.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
