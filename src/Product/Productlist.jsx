// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../Cart/CartContext";
// import Data from "../Data/Data";

// const ProductList = () => {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>All Products</h2>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {Data.map((item) => (
//           <div
//             key={item._id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               width: "200px",
//               cursor: "pointer",
//             }}
//           >
//             <img
//               src={item.images}
//               alt={item.title}
//               width="180"
//               onClick={() => navigate(`/product/${item._id}`)}
//             />
//             <p onClick={() => navigate(`/product/${item._id}`)}>{item.title}</p>
//             <p>{item.offerprice || item.originalprice}</p>
//             <button onClick={() => addToCart(item)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;