import React, { useContext, useState, useEffect } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        // Calculate total amount whenever cart items change
        const calculateTotal = () => {
            let total = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = all_product.find((product) => product.id === Number(item));
                    total += itemInfo.price * cartItems[item];
                }
            }
            return total;
        };

        setTotalAmount(calculateTotal());
    }, [cartItems, all_product]);

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
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitem-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>{e.price * cartItems[e.id]}</p>
                                <img className='remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Suma</h1>
                    <div>
                        <div className="caritems-total-item">
                            <p>Visa suma</p>
                            <p>${totalAmount}</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <button>Testi</button>
            </div>
        </div>
    );
}

export default CartItems;
