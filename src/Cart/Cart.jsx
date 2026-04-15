import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import cart from './Cart.module.css'
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartOpen, setCartOpen }) => {


  const navigate = useNavigate();

      const { cartItems, removeFromCart, addToCart,decreaseQuantity } = useContext(CartContext);

  const totalAmount = cartItems.reduce((sum, item) => {
    const price = parseFloat(
      (item.offerprice || item.fixedprice || item.originalprice || "0").replace('$', '')
    );
    return sum + price * item.quantity;
  }, 0);

  const handlecheckout  = () => {
    setCartOpen(false);
    navigate("/Checkoutpage");
  }

  return (
    <div className={`${cart.drawer} ${cartOpen ? cart.open : ''}`}>
      <div className={cart.one}>
         <p onClick={() => setCartOpen(false)}>X</p>
         <p className={cart.s2}><i className="fa-solid fa-bag-shopping"></i>CART</p>
      </div>
      <div>
      {cartItems.length === 0 ? (
        <div className={cart.two}>
          <div>
        <p className={cart.s3}>Your Cart is empty</p>
        </div>
        <div className={cart.ins}>
          <p className={cart.let}>Back to Shop</p>
        </div>
        </div>
      ) : (
        cartItems.map(item => (
          <div key={item._id} className={cart.wholeclass}>
            <div className={cart.firstclass}>
              <div className={cart.inter}> 
                <img src={item.image} alt="" />
                </div>
                <p className={cart.s4}>{item.name}</p>
                <p className={cart.del} onClick={() => removeFromCart(item._id)}><i class="fa-solid fa-trash"></i></p>
            </div>
           <div className={cart.secondclass}>
            <div className={cart.in}>
            <p className={cart.s5}>Quantity:  <span className={cart.hint} onClick={() => addToCart(item)}>+</span> <span>{item.quantity}</span> <span className={cart.hint} onClick={() => decreaseQuantity(item._id)}>-</span></p>
            </div>
            <div>
            <p className={cart.s6}>{item.offerprice || item.fixedprice || item.originalprice}</p>
            </div>
           </div>  
          </div>   
        ))
      )}
      <div>
        <h3 className={cart.s1}>Total: ${totalAmount.toFixed(2)}</h3>  
      </div>
        
          </div>
          {cartItems.length > 0 ?   (<div className={cart.footer} onClick={handlecheckout}>
            <p className={cart.out}>Checkout</p>
          </div>): ("")}
         
 </div>

)};




export default Cart







