import { Route, Routes } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import About from '../About/About'
import Bestdeals from '../Bestdeals/Bestdeals'
import Shop from '../Shop/Shop'
import Contactus from '../Contactus/Contactus'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Pages/Home/Home'
import  { CartProvider } from '../../Cart/CartContext'
import Products from '../../Products'
import ProductDetails from '../../Product/Productdetails'
import ProductList from '../../Product/Productlist'
import Loginform from '../../Loginform/Loginform'
import { WishlistProvider } from '../../Wishlist/WishlistContext'
import Wishlist from '../../Wishlist/Wishlist'
import Checkoutpage from '../../Checkoutpage/Checkoutpage'
import Register from '../../Registerform/Register'

const Routing = () => {
  return (
    <div>
      <WishlistProvider>
      <CartProvider>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bestdeals' element={<Bestdeals/>}/>
            <Route path='/about' element={<About/>}/>
             <Route path='/contactus' element={<Contactus/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/Products' element={<Products/>} />
            <Route path='/product/:id' element={<ProductDetails/>} />
            <Route path='/Productlis' element={<ProductList/>} />
            <Route path='/form' element={<Loginform/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/Checkoutpage' element={<Checkoutpage/>} />
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Login' element={<Loginform/>}/>
          </Routes>
        <Footer/>
        </CartProvider>
        </WishlistProvider>
       
    </div>
  )
}

export default Routing