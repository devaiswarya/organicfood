import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../Data/Data'; 
import { CartContext } from '../Cart/CartContext';
import {WishlistContext} from '../Wishlist/WishlistContext'
import music from './Productdetails.module.css'
import axios from 'axios';

const Search = () => {

    const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const {addToWishlist} = useContext(WishlistContext);
  const  [product,setdata] = useState({})

  const [quantity, setQuantity] = useState(1); 

  const getdata = async() => {
    try{
      const res = await axios.get(`http://127.0.0.1:8000/api/products/retrieve/${id}`)
      setdata(res.data.data)
      console.log(res.data)
    }
    catch(err){
      console.log(err)
    }
  }
useEffect(()=>{
  getdata();
},[])
  
 

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


  return (
      <div className={music.wholeclass}>
      <div className={music.firstclass}>
        
        <div className={music.firstchild}>
          <div className={music.imageclass}>
          <img src={product.image} alt={product.title}  />
          </div>
        </div>
        <div className={music.secondchild}>
          <h2 className={music.f1}>{product.product_name}</h2>
          <p className={music.f2}>{product.category?.name}</p>
          <div className={music.f3}>
            <del className={music.delete}>{product.product_offer}</del>
            <p className={music.f3}>{product.product_price}</p>
          </div>
          <p className={music.des}>{product.des}</p>
          <div className={music.add}>
            <p onClick={decreaseQuantity} className={music.buts}>-</p>
            <span style={{ margin: '0 10px' }}>{quantity}</span>
            <p onClick={increaseQuantity}  className={music.buts}>+</p>
          </div>
          <p onClick={() => addToCart({ ...product, quantity })} className={music.one}>
            Add to Cart
          </p>
        </div>
      </div>
    </div>
  )
}

export default Search
