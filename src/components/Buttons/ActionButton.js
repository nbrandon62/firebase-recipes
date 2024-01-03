import React from 'react'

import './styles/actionbutton.css'

const ActionButton = ({
  children,
  backgroundColor,
  className,
  onClick,
  arialabel,
  disabled,
}) => {
  return (
    <button
      style={{ backgroundColor }}
      className={className}
      onClick={onClick}
      aria-label={arialabel}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ActionButton
