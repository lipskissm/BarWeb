import React from 'react'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="display-left">
        <div className="div display-image">
            <img className='main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className="div display-right">
        <h1>{product.name}</h1>
        <div className="div display-right-star">

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
