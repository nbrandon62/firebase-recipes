import React from 'react'
import './styles/sortbutton.css'

const SortButton = ({
  category: { icon, label, className },
  onClick,
  isActive,
}) => {
  const buttonClassnames = `button__sort ${
    isActive ? 'button__sort--active' : 'button__sort--default'
  } ${className}`

  return (
    <button
      className={buttonClassnames}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  )
}

export default SortButton
