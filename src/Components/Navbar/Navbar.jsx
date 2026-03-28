import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css'
import icon from '../../assert/leaf.png'
import { Link } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import Hamburger from '../../Hamburger/Hamburger'
import { WishlistContext } from '../../Wishlist/WishlistContext'
import CartContext from '../../Cart/CartContext'

const Navbar = () => {

     const [cartOpen, setCartOpen] = useState(false);

     const {wishlistItems} = useContext(WishlistContext);

     const {cartItems} = useContext(CartContext);

     const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <div className={styles.wholeclass}>       
             <div className={styles.firstclass}>
                <div className={styles.firstchild}>
            <p className={styles.f4}>Welcome to Organic Shop</p>
            </div>
        </div>
        <div className={styles.secondclass}>
            <div className={styles.secondchild}>
            <div className={styles.one}>
                <img src={icon} alt="" />
            </div>
            <div className={styles.two}>
                <input type="text" placeholder='Search'/>
                 <div className={styles.inputfield}>
                    <i className="fa-brands fa-sistrix"></i>
                 </div>
            </div>
          
            <div className={styles.third}>
                <div className={styles.icons}>
                  <div className={styles.menu}>
                <i className="fa-solid fa-bars" onClick={() =>setDrawerOpen(!drawerOpen)}></i>{drawerOpen && (
  <Hamburger drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
)}
               </div>
                <div className={styles.wish}><Link to={'/wishlist'}><i className="fa-regular fa-heart"></i>{wishlistItems.length > 0 && (<span className={styles.bell}>{wishlistItems.length}</span>)}</Link></div>
                <div><Link to={'/form'}><i className="fa-regular fa-user"></i></Link></div>
                <div className={styles.wish}><i className="fa-solid fa-bag-shopping" onClick={() => setCartOpen(true)}></i>{cartItems.length >0 && (<span className={styles.bell}>{cartItems.length}</span>)}</div>
                 {cartOpen && (
        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      )}
                </div>
            </div>
            </div>
            </div>
             <div>
            <div className={styles.middle}>
                <div className={styles.inchild}>
                <input type="text" placeholder='Search'/>
                 <div className={styles.boat}>
                    <i className="fa-brands fa-sistrix"></i>
                 </div>
                 </div>
            </div>
            </div>
        <div className={styles.thirdclass}>
            <div className={styles.thirdchild}>
            <div className={styles.firstsub}>
                <div><i className="fa-solid fa-bars"></i></div>
                <p>All Categories</p>
            </div>
            <div className={styles.navbarclass}> 
            <Link to={'/'}>
            <p className={styles.f1}>Home</p>
            </Link>
                <Link to={'/BestDeals'}>              
                 <p className={styles.f1}>Best Deals</p>
                 </Link>
                 <Link to={'/about'}>               
                 <p className={styles.f1}>About</p>
                 </Link>
                 <Link to={'/contactus'}>
                <p className={styles.f1}>Contact Us</p>
                </Link>
                <Link to={'/shop'}>
                <p className={styles.f1}>Shop</p>
                </Link>
            </div>
            <div className={styles.subclass}>
                <div><i className="fa-solid fa-phone"></i></div>
                <p>Call To +1800090098</p>
            </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Navbar
