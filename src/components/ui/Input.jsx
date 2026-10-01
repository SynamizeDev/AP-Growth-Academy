import { forwardRef } from 'react'

const Input = forwardRef(function Input(
  { label, hint, error, leadingIcon: LeadingIcon, trailing, className = '', ...props },
  ref,
) {
  const id = props.id || props.name

  return (
    <label className={`ui-field ${error ? 'ui-field--error' : ''} ${className}`} htmlFor={id}>
      {label && <span className="ui-field__label">{label}</span>}
      <span className="ui-field__control">
        {LeadingIcon && <LeadingIcon className="ui-field__icon" aria-hidden="true" />}
        <input ref={ref} id={id} {...props} />
        {trailing && <span className="ui-field__trailing">{trailing}</span>}
      </span>
      {(error || hint) && <span className="ui-field__message">{error || hint}</span>}
    </label>
  )
})

export default Input
