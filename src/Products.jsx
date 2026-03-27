import React, { useContext } from 'react'; 
import { CartContext } from './Cart/CartContext'; 
import Data from '../src/Data/Data'; 
const Products = () => { 
    // const { addToCart } = useContext(CartContext); 
    const { addToCart,decreaseQuantity, cartItems } = useContext(CartContext);
// console.log("Products cartItems:", cartItems);

  const getQuantity = (productId) => {
    const item = cartItems.find(item => item._id === productId);
    return item ? item.quantity : 0;
  }
 return ( 
 <div> 
    <h2>Products</h2> 
    {Data.map((product) => ( 
        <div key={product._id}> 
        <span>{product.name} - ${product.price}</span> 
         {/* {getQuantity(product._id) === 0 ? (
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          ) : (
            <>
              <button onClick={() => decreaseQuantity(product._id)}>-</button>
              <span>{getQuantity(product._id)}</span>
              <button onClick={() => addToCart(product)}>+</button>
            </>
          )} */}


          {getQuantity(product._id) === 0 ? (
  <button onClick={() => addToCart(product)}>Add to Cart</button>
) : (
  <>
    <button onClick={() => decreaseQuantity(product._id)}>-</button>
    <span>{getQuantity(product._id)}</span>
    <button onClick={() => addToCart(product)}>+</button>
  </>
)}
        {/* <button onClick={() => addToCart(product)}>Add to Cart</button>  */}
        </div> ))} 
        </div> 
        ); 
    }; 
export default Products;


