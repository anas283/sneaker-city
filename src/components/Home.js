import React from 'react'
import './Home.css'
import circle from '../assets/images/circle-linear.png'
import shoe1 from '../assets/images/shoe-1.png'
import ShoeOption from './ShoeOption'

const Home = () => {
  return (
    <div className='home'>
      <div className='section-info'>
        <h1 className='shoe-title'>Puma Running SX</h1>
        <h6 className='shoe-info'>
          The shoe that moved mountains for eternity and 
          still does so with a swift touch of modernism
        </h6>
        <h4 className='shoe-price'>62, 000RWF</h4>
        <button className='btn btn-red'>Add to cart</button>
      </div>
      <div>
        <img className='circle-linear' src={circle} alt="circle" />
        <img className='shoe-1' src={shoe1} alt="shoe1" />
      </div>

      <div className='shoe-container'>
        <ShoeOption />
      </div>
    </div>
  )
}

export default Home