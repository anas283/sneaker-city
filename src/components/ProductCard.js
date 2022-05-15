import React from 'react'
import '../styles/ProductCard.css'
import newSneaker1 from '../assets/images/new-1.svg';
import newSneaker2 from '../assets/images/new-2.svg';
import newSneaker3 from '../assets/images/new-3.svg';
import newSneaker4 from '../assets/images/new-4.svg';

const ProductCard = () => {
  const shoes = [
    { img: newSneaker1, name: 'Adidas Beluga', price: '35, 000RWF' },
    { img: newSneaker2, name: 'Nike Zoom', price: '35, 000RWF' },
    { img: newSneaker3, name: 'Nike Air Jordon XT', price: '35, 000RWF' },
    { img: newSneaker4, name: 'Nike Wobler', price: '35, 000RWF' },
  ]

  const shoe = (
    <div className='row'>
      {shoes.map((shoe) =>
        <div className='product-container'>
          <div className='image-container'>
            <img className='product-image' src={shoe.img} alt="new" />
          </div>
          <h4 className='product-name'>{ shoe.name }</h4>
          <h4 className='product-price'>{ shoe.price }</h4>
        </div>
      )}
    </div>
  )

  return (
    <div>
      { shoe }
    </div>
  )
}

export default ProductCard