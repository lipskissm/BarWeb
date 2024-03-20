import React, {useContext } from 'react'
import './CSS/Kategorija.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item.jsx'
const Kategorija = (props) => {
  const{all_product} = useContext(ShopContext)
  return (
    <div className='Kategorija'>
      <div className="Kategorija-indexSort">
        <p>
          <span>Showing 1-12</span>
        </p>
        <div className="Kategorija-sort">
          Sort by
        </div>
      </div>
      <div className="div Kategorijaproducts">
        {all_product.map((item,index)=>{
          if(props.category===item.category){
            return <Item />
          }
        
        })}

      </div>
    </div>
  )
}

export default Kategorija
