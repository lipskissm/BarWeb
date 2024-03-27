import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/remove_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
     <div className="cartitem-format-main">
        <p>Produktas</p>
        <p>Pavadinimas</p>
        <p>Kaina</p>
        <p>Kiekis</p>
        <p>Suma</p>
        <p>Išimti</p>
     </div>
     <hr />
     {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
            <div className="cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.price * cartItems[e.id]}</p>
                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
         </div>
        }
     })}
    </div>
  )
}

export default CartItems
