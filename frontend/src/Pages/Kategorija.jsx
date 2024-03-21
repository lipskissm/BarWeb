import React, {useContext } from 'react'
import './CSS/Kategorija.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item.jsx'

const Kategorija = (props) => {
  const{all_product} = useContext(ShopContext)
  return (
    <div className='Kategorija'>
      <img src={props.banner} alt=""/>
      <div className="Kategorija-indexSort">
        <p>
          <span>Showing 1-12</span>
        </p>
        <div className="Kategorija-sort">
          Sort by
        </div>
      </div>
      <div className="Kategorijaproducts">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name = {item.name} />
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
