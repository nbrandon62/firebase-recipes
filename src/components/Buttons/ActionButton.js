import React from 'react'

import './styles/actionbutton.css'

const ActionButton = ({
  children,
  backgroundColor,
  onClick,
  arialabel,
  disabled,
}) => {
  return (
    <button
      style={{ backgroundColor }}
      className={[
        'button__action',
        disabled ? 'button__action--disabled'
        : ''
      ].filter(Boolean).join(' ')}
      onClick={onClick}
      aria-label={arialabel}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ActionButton
