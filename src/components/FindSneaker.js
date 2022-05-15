import React from 'react'
import vans from '../assets/images/vans.svg'
import nike from '../assets/images/nike.svg'
import adidas from '../assets/images/adidas.svg'
import arrowRight from '../assets/images/arrow-right.svg'
import '../styles/FindSneaker.css'

const FindSneaker = () => {
  return (
    <div className='card-shadow'>
      <img className='sneaker-image' src={vans} alt="vans" />
      <img className='sneaker-image' src={nike} alt="nike" />
      <img className='sneaker-image' src={adidas} alt="adidas" />
      <div className='find-info'>
        <h5 className='find-text'>Find that <br /> sneaker your want</h5>
        <img className='arrow-right' src={arrowRight} alt="arrow" />
      </div>
    </div>
  )
}

export default FindSneaker