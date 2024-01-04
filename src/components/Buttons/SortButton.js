import React from 'react'
import './styles/sortbutton.css'

const SortButton = ({
  category: { backgroundColor, color, icon, label, value },
  onClick
}) => {
  return (
    <button
      className='sort-button'
      style={{ backgroundColor, color }}
      color={color}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  )
}

export default SortButton
