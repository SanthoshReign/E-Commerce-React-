import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalCartAmount,all_product, addToCart, cartItems, removeFromCart, setCartItems} = useContext(ShopContext);
    // console.log(cartItems);
    function removeAll(index){
        setCartItems((prev) => ({
            ...prev, [index]:prev[index]-cartItems[index] /*prev[index] means total quantity so we can remove all quantity of any product is by subtracting 
            prev quantity minus current quantity because both are same so it becomes 0 and all quantities are removed*/
        }))
    }
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if(cartItems[e.id] > 0){
                    return <div>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt="" className='carticon-product-icon' />
                                    <p>{(e.name).trim()}</p>
                                    <p>${e.new_price}</p>
                                    <div>
                                        <button 
                                            className='cartitems-remove'
                                            onClick={()=>{removeFromCart(e.id)}}
                                        >-</button>
                                        <button className="cartitems-quantity">
                                            {cartItems[e.id]}
                                        </button>
                                        <button 
                                            className='cartitems-add'
                                            onClick={()=>{addToCart(e.id)}}
                                        >+</button>
                                    </div>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img
                                        className='cartitems-remove-icon'
                                        src={remove_icon} 
                                        onClick={()=>{removeAll(e.id)}}
                                        alt="" 
                                    />
                                </div>
                                <hr />
                            </div>
                }
                return null;
                
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;