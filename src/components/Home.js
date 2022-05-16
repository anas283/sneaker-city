import React from 'react'
import '../styles/Home.css'
import circle from '../assets/images/circle-linear.svg'
import shoe1 from '../assets/images/shoe-1.png'
import ShoeOption from './ShoeOption'
import FindSneaker from './FindSneaker'
import ProductCard from './ProductCard'
import feature1Img from '../assets/images/feature1.svg'
import feature2Img from '../assets/images/feature2.svg'
import feature3Img from '../assets/images/feature3.svg'

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

      <div className='section-features column'>
        <div>
          <h2 className='feature-title'>Good sneakers <br /> take you good places</h2>
          <h5 className='feature-subtitle'>look no further, this is where you find the best pair!</h5>
        </div>
        <div className='space-between'>
          <div className='feature'>
            <img className='feature1-img' src={feature1Img} alt="feature" />
            <h3 className='feature-text'>Curated <br/> & unique collection</h3>
          </div>
          <div className='feature feature2-container'>
            <img className='feature2-img' src={feature2Img} alt="feature" />
            <h3 className='feature-text text-center'>100% Original sneakers</h3>
          </div>
          <div className='feature'>
            <img className='feature3-img' src={feature3Img} alt="feature" />
            <h3 className='feature-text'>Buy the latest <br /> & define the trends</h3>
          </div>
        </div>
      </div>

      <div className='border-line'></div>
    </div>
  )
}

export default Home