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
      className='button__action'
      onClick={onClick}
      aria-label={arialabel}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ActionButton
