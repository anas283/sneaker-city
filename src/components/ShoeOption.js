import React from 'react'
import './ShoeOption.css'
import shoeOption1 from '../assets/images/shoe-option-1.png'
import shoeOption2 from '../assets/images/shoe-option-2.png'
import shoeOption3 from '../assets/images/shoe-option-3.png'
import shoeOption4 from '../assets/images/shoe-option-4.png'

const ShoeOption = () => {

  const shoes = [
    { img: shoeOption1 },
    { img: shoeOption2 },
    { img: shoeOption3 },
    { img: shoeOption4 },
  ]

  const shoe = (
    <div className='row'>
      {shoes.map((shoe) =>
        <div className='card'>
          <img src={shoe.img} alt="shoe" />
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

export default ShoeOption