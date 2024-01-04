import React from 'react'
import './styles/select.css'

const Select = ({ className, value, options, onChange }) => {
  return (
    <select 
    onChange={onChange} 
    value={value}
    className={className}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default Select
