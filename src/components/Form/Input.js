import React from 'react'
import './styles/input.css'

const Input = ({
  className,
  id,
  placeholder,
  type,
  required,
  value,
  onChange,
  children,
}) => {
  return (
    <input
      className={className}
      id={id}
      placeholder={placeholder}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
    >
      {children}
    </input>
  )
}

export default Input
