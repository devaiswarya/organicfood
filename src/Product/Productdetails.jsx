import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
// import {WishlistContext} from '../Wishlist/WishlistContext'
import music from './Productdetails.module.css'
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  // const {addToWishlist} = useContext(WishlistContext);
  const [product, setdata] = useState({})

  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/products/retrieve/${id}`)
        setdata(res.data.data)
        console.log(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getdata();
  }, [id])



  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


  //   let relatedProducts = Data.filter(p =>p.sub?.toLowerCase().trim() === product.sub?.toLowerCase().trim() && p._id !== product._id);
  //   if (relatedProducts.length < 3) {
  //   const others = Data.filter(
  //     p =>
  //       p._id !== product._id &&
  //       !relatedProducts.includes(p)
  //   );
  //   relatedProducts = [...relatedProducts, ...others].slice(0, 3);
  // } 
  // else {
  //   relatedProducts = relatedProducts.slice(0, 3);
  // }


  console.log("Current product:", product);
  // console.log("Related products:", relatedProducts);

  return (
    <div className={music.wholeclass}>
      <div className={music.firstclass}>

        <div className={music.firstchild}>
          <div className={music.imageclass}>
            <img src={product.image} alt={product.title} />
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
            <p onClick={increaseQuantity} className={music.buts}>+</p>
          </div>
          <p onClick={() => addToCart({ ...product, quantity })} className={music.one}>
            Add to Cart
          </p>
        </div>
      </div>



      {/* {relatedProducts.length > 0 && (
        <div className={music.two}>
            <div className={music.relate}>
            <h3>Related Products</h3>
            </div>
            <div  className={music.connect}>
            {relatedProducts.map(rp => (
              <div key={rp._id} className={music.twos}>
                <div className={music.imagediv}>                
                  <img src={rp.image} alt={rp.title}  onClick={() => navigate(`/product/${rp._id}`)} />
                  </div>
                <div className={music.detail}>
                  <p className={music.f5}>{rp.sub}</p>
                <p className={music.f6}>{rp.name}</p>
                <div className={music.f10}>
                {rp.fixedprice ? <p className={music.fixed}>{rp.fixedprice}</p> : ''}
                {rp.offerprice ? <p className={music.discountprice}>{rp.offerprice}</p> : '' }
                {rp.originalprice ? <del className={music.actualprice}>{rp.originalprice}</del> : ''}
                </div>
                <p className={music.but} onClick={() => addToCart(rp)}>{rp.card}</p>
                <div className={music.symbol} onClick={() => addToWishlist(rp)}>
                            <p className={music.win}>{rp.symbol2}</p>
                        </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        
      )} */}


    </div>
  );
};

export default ProductDetails;