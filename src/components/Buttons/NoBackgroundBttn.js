import React from 'react'

import './styles/nobackground.css'

const NoBackgroundBttn = ({children, onClick, arialabel, disabled}) => {
  return (
    <button
    className='button__no-background'
    onClick={onClick}
    aria-label={arialabel}
    disabled={disabled}
    >
        {children}
    </button>
  )
}

export default NoBackgroundBttn