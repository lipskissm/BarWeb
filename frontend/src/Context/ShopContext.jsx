import React, {createContext, useState} from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
   
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCart = () =>{
        let totalAmmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmmount += itemInfo.price * cartItems[item];
                console.log(totalAmmount);
            }
            return totalAmmount;

        }
    }

    const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems){
        if(cartItems[item]>0)
        totalItem += cartItems[item]
    
    
    }
    return totalItem;
    }


    const contextValue = {getTotalCart,getTotalCartItems, all_product, cartItems, addToCart, removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;