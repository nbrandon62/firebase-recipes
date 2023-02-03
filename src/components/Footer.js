import React from 'react'

import '../css/footer.css';

const Footer = ({ user }) => {
  return (
    <div className='footer'>
        <div className='footer-links'>
            <div className='footer-home'>Home</div>
            {user ? <div className='footer-submit'>Submit</div> : null}
        </div>
        <div className='footer-icon'>Icon</div>
    </div>
  )
}

export default Footer