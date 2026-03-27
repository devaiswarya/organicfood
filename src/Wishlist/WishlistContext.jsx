import React, { createContext, useState } from 'react'


export const WishlistContext = createContext();

 export const WishlistProvider = ({children}) => {

    const [wishlistItems,setWishlistItems] = useState([]);
    

   const addToWishlist = (product) => {
  setWishlistItems(prev => {
    const exists = prev.some(item => item._id === product._id);
    if (!exists) {
      return [...prev, product];
    }
    return prev;
  });
};
   
    const removeFromWishlist = (product) => {
        setWishlistItems(wishlistItems.filter(item => item._id !== product._id));
    };

  return (
        <WishlistContext.Provider value={{wishlistItems,addToWishlist,removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
  )
};