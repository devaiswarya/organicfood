import React, { createContext,useState } from 'react'


 export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems,setcartItems] = useState([]);

  const addToCart = (product) => {
  setcartItems((prevItems) => {
    const existingProduct = prevItems.find(item => item._id === product._id);

    if (existingProduct) {
      return prevItems.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

  const removeFromCart = (_id) => {
    setcartItems(prevItems => prevItems.filter(item => item._id !== _id));
  };

const decreaseQuantity = (_id) => {
  setcartItems(prevItems =>
    prevItems
      .map(item =>
        item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0) 
  );
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart ,decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  )
};


export default CartContext