import { forwardRef } from 'react'

const Button = forwardRef(function Button(
  {
    as: Element = 'button',
    variant = 'primary',
    size = 'md',
    iconOnly = false,
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    className = '',
    children,
    ...props
  },
  ref,
) {
  return (
    <Element
      ref={ref}
      className={`ui-button ui-button--${variant} ui-button--${size} ${iconOnly ? 'ui-button--icon' : ''} ${className}`}
      {...props}
    >
      {LeadingIcon && <LeadingIcon className="ui-button__icon" aria-hidden="true" />}
      {children && <span>{children}</span>}
      {TrailingIcon && <TrailingIcon className="ui-button__icon" aria-hidden="true" />}
    </Element>
  )
})

export default Button
