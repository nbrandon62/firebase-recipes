import React from 'react'
import './styles/textarea.css'

const Textarea = ({ value, onChange, id, onKeyDown, placeholder, required}) => {
  return (
    <textarea 
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