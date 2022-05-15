import React from 'react'
import '../styles/ShoeOption.css'
import shoeOption1 from '../assets/images/shoe1.svg'
import shoeOption2 from '../assets/images/shoe2.svg'
import shoeOption3 from '../assets/images/shoe3.svg'
import shoeOption4 from '../assets/images/shoe4.svg'

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