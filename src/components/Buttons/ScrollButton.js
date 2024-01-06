import React from 'react'
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs'

import './styles/scrollButton.css'

const ScrollButton = ({ direction }) => {
  const scrollToPosition = () => {
    const position = direction === 'up' ? 0 : document.documentElement.scrollHeight

    window.scrollTo({top: position, left: 0, behavior: 'smooth'})
  }
  return (
    <button
      className='scroll__button'
      onClick={scrollToPosition}
      aria-label={`scroll to the ${
        direction === 'up' ? 'top' : 'bottom'
      } of the page`}
      title={`scroll to the ${
        direction === 'up' ? 'top' : 'bottom'
      } of the page`}
      type='button'
    >
      {direction === 'up' ? (
        <BsFillArrowUpCircleFill
          style={{ fontSize: '50px', color: 'black'}}
        />
      ) : (
        <BsFillArrowDownCircleFill
          style={{ fontSize: '50px', color: 'black'}}
        />
      )}
    </button>
  )
}

export default ScrollButton
