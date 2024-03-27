import React from 'react';
import './ProductDisplay.css';

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className='productdisplay'>
      <div className="display-left">
        <div className="display-image">
          <img className='main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="description-right">
           <p> sadasdadsdsa</p>
          </div>
        <div className="productdisplay-right-price">
          <div className="price">
            €{product.price}
          </div>
        </div>
          <button>Į krepšelį</button>
        
      </div>
    </div>
  );
};

export default ProductDisplay;
