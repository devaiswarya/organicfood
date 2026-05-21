import React, { useContext, useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import icon from '../../assert/leaf.png'
import { Link } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import Hamburger from '../../Hamburger/Hamburger'
import { WishlistContext } from '../../Wishlist/WishlistContext'
import CartContext from '../../Cart/CartContext'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [cartOpen, setCartOpen] = useState(false);
    
    const [find, setfind] = useState('')
    const [name, setname] = useState([])

    const navigate = useNavigate();

    const { wishlistItems } = useContext(WishlistContext);

    const { cartItems } = useContext(CartContext);

    const [drawerOpen, setDrawerOpen] = useState(false);


   
    const showdata = async(id) => {
        try{
            const res=await axios.get(`https://backend-apqk.onrender.com/api/products/retrieve/${id}`)
            console.log(id)
            console.log(res.data)
            setfind('')
            navigate(`/product/${id}`);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
         const getdata = async () => {
        try {
            const res = await axios.get(`https://backend-apqk.onrender.com/api/products/fetched?find=${find}`)
            setname(res.data.data)
            console.log(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }
        getdata();
        
    }, [find])

    // useEffect(()=>{
    //     showdata();
    // },[])
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
                            <Link to={'/'}>
                                <img src={icon} alt="" />
                            </Link>
                        </div>
                        <div className={styles.two}>
                            <input type="text" placeholder='Search'value={find} onChange={(e) => setfind(e.target.value)}/>
                            <div className={styles.inputfield}>
                                <i className="fa-brands fa-sistrix"></i>
                            </div>
                            
                        </div>

                        <div className={styles.third}>
                            <div className={styles.icons}>
                                <div className={styles.menu}>
                                    <i className="fa-solid fa-bars" onClick={() => setDrawerOpen(!drawerOpen)}></i>{drawerOpen && (
                                        <Hamburger drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                                    )}
                                </div>
                                <div className={styles.wish}><Link to={'/wishlist'}><i className="fa-regular fa-heart"></i>{wishlistItems.length > 0 && (<span className={styles.bell}>{wishlistItems.length}</span>)}</Link></div>
                                <div><Link to={'/form'}><i className="fa-regular fa-user"></i></Link></div>
                                <div className={styles.wish}><i className="fa-solid fa-bag-shopping" onClick={() => setCartOpen(true)}></i>{cartItems.length > 0 && (<span className={styles.bell}>{cartItems.length}</span>)}</div>
                                {cartOpen && (
                                    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>retyuiop</p> */}
                <div>
                    <div className={styles.middle}>
                        <div className={styles.inchild}>
                            {/* <input type="text" placeholder='Search' onChange={(e) => setfind(e.target.value)} /> */}
                            {/* <div className={styles.boat}>
                                <i className="fa-brands fa-sistrix"></i>
                            </div> */}
                            {find.length>0 ?
                            <div className={styles.cool}>
                            {name.map((items,index)=>(
                            <ul className={styles.searchbar}>
                                <li onClick={() => showdata(items.id)}>{items.product_name}</li>
                            </ul>
                            
                         ))}
                         </div>
                         :
                         ''}
                        </div>
                    </div>
                </div>
                <div className={styles.thirdclass}>
                    <div className={styles.thirdchild}>
                        <div className={styles.firstsub}>
                            {/* <div><i className="fa-solid fa-bars"></i></div>
                <p>All Categories</p> */}
                        </div>
                        <div className={styles.navbarclass}>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? styles.active : ""}>
                                <p className={styles.f1} >Home</p>
                            </NavLink>
                            {/* <Link to={'/BestDeals'}>              
                 <p className={styles.f1}>Best Deals</p>
                 </Link> */}
                            <NavLink to={'/about'} className={({ isActive }) => isActive ? styles.active : ""}>
                                <p className={styles.f1}>About</p>
                            </NavLink>
                            <NavLink to={'/contactus'} className={({ isActive }) => isActive ? styles.active : ""}>
                                <p className={styles.f1}>Contact Us</p>
                            </NavLink>
                            <NavLink to={'/shop'} className={({ isActive }) => isActive ? styles.active : ""}>
                                <p className={styles.f1}>Shop</p>
                            </NavLink>
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
