export default function Tabs({ items, value, onChange, ariaLabel = 'Tabs', compact = false }) {
  return (
    <div className={`ui-tabs ${compact ? 'ui-tabs--compact' : ''}`} role="tablist" aria-label={ariaLabel}>
      {items.map((item) => {
        const option = typeof item === 'string' ? { value: item, label: item } : item
        return (
          <button
            type="button"
            role="tab"
            aria-selected={value === option.value}
            className={value === option.value ? 'is-active' : ''}
            onClick={() => onChange?.(option.value)}
            key={option.value}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
