import React, { createContext, useState } from 'react';
import all_product from "../components/assets/all_product"

export const ShopContext =  createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;          
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]:prev[itemId]+1 /*previous quantity plus 1 for adding 1 quantiy*/ 
        }))
        // console.log(cartItems);
    }
    /*spread operator (...) is used to retain previous values in an array or object*/
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]:prev[itemId]-1 /*previous quantity minus 1 for removing 1 quantiy*/ 
        }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                )
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalCartItems = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalCartItems += cartItems[item];
            }
        }
        return totalCartItems;
    }

    // const removeEntireItemFromCart = (index) => {
    //    setCartItems(cartItems.filter((_, i)=> i !== index));
    // }

    const contextValue = {
        getTotalCartItems, 
        getTotalCartAmount, 
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart,
        setCartItems
    };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;