import React from 'react'
import '../styles/Footer.css'
import logo from '../assets/icons/logo.svg'
import facebookIcon from '../assets/icons/facebook-icon.svg'
import instagramIcon from '../assets/icons/instagram-icon.svg'
import twitterIcon from '../assets/icons/twitter-icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='column'>
        <img className='logo-img' src={logo} alt="logo" />
        <h5 className='subtitle'>
          We don’t just sell shoes, we sell memories and collectibles. We collect the best in the best with an attention to all little details. we know that shoes speaks louder than words that’s why we’ve mastered the science of good sneakers.
        </h5>
      </div>

      <div className='space-between'>
        <div className='row'>
          <h5 className='subtitle2'>Don’t missout on once-in-a-while-deals:</h5>
          <div className='row'>
            <img className='social-icon' src={twitterIcon} alt="fb" />
            <img className='social-icon' src={instagramIcon} alt="ig" />
            <img className='social-icon' src={facebookIcon} alt="tw" />
          </div>
        </div>
        <div>
          <h5 className='subtitle2 -tx35'>Support line: +250 788 467 808</h5>
        </div>
        <div>
          <h5 className='subtitle2'>Copyright  2021 © Sneaker City ltd</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer