import React, { useContext } from 'react'
import {WishlistContext} from './WishlistContext'
import alter from './Wishlist.module.css'
import {CartContext} from '../Cart/CartContext'

const Wishlist = () => {

    const {wishlistItems,removeFromWishlist } = useContext(WishlistContext);

    const {addToCart} = useContext(CartContext);

    

  return (
    <div className={alter.wholeclass}>
      <div className={alter.firstclass}>
        <p className={alter.f1}>Wishlist</p>
        <div className={alter.secondclass}>
          <p className={alter.f2}>Home</p>
          <p className={alter.f3}>/ Wishlist</p>
        </div>
      </div>
      <div className={alter.third}>
           {wishlistItems.length === 0 && ( <div className={alter.hint}><p className={alter.f1}>Wishlist is empty</p></div>)}
           <div className={alter.thirdclass}>
        {wishlistItems.map((item)=>(
            <div key={item.id} className={alter.one}>
              <div className={alter.two}>
                <img src={item.image} alt="" />
                </div>
                <div className={alter.three}>
                <p className={alter.f4}>{item.name}</p>
                <p className={alter.f5}>{item.sub}</p>
                <div className={alter.subclass}>
                <p className={alter.original}>{item.originalprice}</p>
                <p className={alter.discount}>{item.offerprice}</p>
                <p className={alter.fixed}>{item.fixedprice}</p>
                </div>
                <div className={alter.fly}>
                <div>
                <p className={alter.car} onClick={() => addToCart(item)}>{item.card}</p>
                </div>
                <div className={alter.hints}>
                  <p onClick={() => removeFromWishlist(item)}>Remove</p>
                  </div>
                </div>
                </div>
                </div>
                
        ))}
        </div>
        </div>
        </div>
  )
}

export default Wishlist