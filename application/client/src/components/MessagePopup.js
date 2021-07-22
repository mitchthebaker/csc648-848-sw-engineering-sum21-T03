import React from 'react'

// Displays a message
export default function MessagePopup(props) {
  
    let message = ''
    let isHidden = 'hidden'

    return (
    <div className='message-popup ${isHidden}'>
      <h1>Buyer Standards Agreement</h1>
      <p>Message info...</p>
    </div>
  )
}