import React from 'react'
import '../styles/Home.css'
import circle from '../assets/images/circle-linear.svg'
import shoe1 from '../assets/images/shoe-1.png'
import ShoeOption from './ShoeOption'
import FindSneaker from './FindSneaker'
import ProductCard from './ProductCard'

const Home = () => {
  return (
    <div>
      <div className='hero'>
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

      <div className='section-find'>
        <FindSneaker />
      </div>

      <div className='section-new'>
        <h3 className='new-title'>All the new arrivals</h3>

        <ProductCard />
      </div>
    </div>
  )
}

export default Home