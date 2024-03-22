import React, {useContext } from 'react'
import './CSS/Kategorija.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item.jsx'
const Kategorija = (props) => {
  const{all_product} = useContext(ShopContext)
  return (
    <div className='Kategorija'>
      <div className="Kategorijaproducts">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name = {item.name} image={item.image} price={item.price} />
          }
          else {
            return null;
          }
        })}

      </div>
    </div>
  )
}

export default Kategorija
