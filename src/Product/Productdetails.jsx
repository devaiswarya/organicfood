import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../Data/Data'; 
import { CartContext } from '../Cart/CartContext';
import {WishlistContext} from '../Wishlist/WishlistContext'
import music from './Productdetails.module.css'

const ProductDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const {addToWishlist} = useContext(WishlistContext);

  const product = Data.find(p => p._id === Number(_id));

  
  if (!product) return <p>Product not found!</p>;

  
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


  let relatedProducts = Data.filter(p =>p.sub?.toLowerCase().trim() === product.sub?.toLowerCase().trim() && p._id !== product._id);
  if (relatedProducts.length < 3) {
  const others = Data.filter(
    p =>
      p._id !== product._id &&
      !relatedProducts.includes(p)
  );
  relatedProducts = [...relatedProducts, ...others].slice(0, 3);
} 
else {
  relatedProducts = relatedProducts.slice(0, 3);
}


  console.log("Current product:", product);
console.log("Related products:", relatedProducts);

  return (
    <div className={music.wholeclass}>
      <div className={music.firstclass}>
        
        <div className={music.firstchild}>
          <img src={product.image} alt={product.title}  />
        </div>

        
        <div className={music.secondchild}>
          <h2 className={music.f1}>{product.name}</h2>
          <p className={music.f2}>{product.sub}</p>
          <div className={music.f3}>
            {product.fixedprice ? <p className={music.fix}>{product.fixedprice}</p> : ''}
            {product.offerprice ? <p>{product.offerprice}</p> : ''}
            {product.originalprice ? <p>{product.originalprice}</p> : ''}
          </div>
          <p className={music.des}>Description: “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?” {/* You can add real description */}</p>

         
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

      
      
      {relatedProducts.length > 0 && (
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
        
      )}

    
    </div>
  );
};

export default ProductDetails;