import React from 'react'
import './styles/textarea.css'

const Textarea = ({ className, value, onChange, id, onKeyDown, placeholder, required}) => {
  return (
    <textarea 
    className={className}
    value={value}
    onChange={onChange}
    id={id}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    required={required}
    />
  )
}

export default Textarea