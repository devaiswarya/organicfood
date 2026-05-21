import React, { useContext, useEffect, useState } from 'react'
import file from "./Aboutthirdsection.module.css"
import {CartContext} from '../../../Cart/CartContext'
import { WishlistContext } from '../../../Wishlist/WishlistContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Aboutthirdsection = () => {

  // const fruits=[{
  //   _id:134,
  //   image:pic,
  //   name:'Voluptatem',
  //   fixedprice:"$410.00",
  //   card:"Add to card",
  //   icon:<i class="fa-solid fa-cart-shopping"></i>,
  //   icons:<i class="fa-regular fa-heart"></i>,
  //   wish:'Whislist',
  //   icon1:<i class="fa-solid fa-arrow-right-arrow-left"></i>,
  //   // com:'compare'
  // },
  // {
  //  _id:118,
  //  image:pic1,
  //  name:'Omnis iste natus',
  //  fixedprice:"$40.00 - $300.00",
  //  card:"Add to card",
  // //  hint:'sale',
  //  icon:<i class="fa-solid fa-cart-shopping"></i>,
  //  icons:<i class="fa-regular fa-heart"></i>,
  //  wish:'Whislist',
  //  icon1:<i class="fa-solid fa-arrow-right-arrow-left"></i>,
  // //  com:'compare'
  // },
  // {
  //   _id:120,
  //   image:pic2,
  //   name:'Ut perspiciatis',
  //   fixedprice:'$400.00',
  //   // hint:'sale',
  //   card:'Add to card',
  //   icon:<i class="fa-solid fa-cart-shopping"></i>,
  //  icons:<i class="fa-regular fa-heart"></i>,
  //  wish:'Whislist',
  //  icon1:<i class="fa-solid fa-arrow-right-arrow-left"></i>,
  //  com:'compare'

// },
// {
//   _id:114,
//   image:pic3,
//   name:'Facere Possimus',
//   fixedprice:'$120.00',
//   card:'Add to card',
//   icon:<i class="fa-solid fa-cart-shopping"></i>,
//    icons:<i class="fa-regular fa-heart"></i>,
//    wish:'Whislist',
//    icon1:<i class="fa-solid fa-arrow-right-arrow-left"></i>,
  //  com:'compare'

// }]

// const fruit= [{
//   _id:123,
//   image: pic4,
//   name:"Organic Corn",
//   fixedprice:'$100.00-$320.00',
//   card:'Add to card',
//   icon2:<i class="fa-solid fa-cart-shopping"></i>,
//   icon3:<i class="fa-regular fa-heart"></i>,
//   wish:'Whislist',
  // hints:'Sale'
// },
// {
//     _id:109,
//   image:pic5,
//   name:"et iusto odio",
//   originalprice:'$55.00',
//   offerprice:'$52.00',
//   card:'Add to card',
//   icon2:<i class="fa-solid fa-cart-shopping"></i>,
//   icon3:<i class="fa-regular fa-heart"></i>,
//   wish:'Whislist',
  // hints:'Sale'
// },{
//     _id:127,
//     image:pic6,
//   name:"organic peas",
//   fixedprice:'$17.00',
//   card:'Add to card',
//   icon2:<i class="fa-solid fa-cart-shopping"></i>,
//   icon3:<i class="fa-regular fa-heart"></i>,
//   wish:'Whislist',
  // hints:'Sale'
// },
// {
//   _id:102,
//   image:pic7,
//   name:"Assumenda est",
//   fixedprice:'$150.00',
//   card:'Add to card',
//   icon2:<i class="fa-solid fa-cart-shopping"></i>,
//   icon3:<i class="fa-regular fa-heart"></i>,
//   wish:'Whislist',
  // hints:'Sale'
// }]

// const finish = [{
//   _id:  120,
//   image: pic9,
//   name:'Organic Apples',
//   fixedprice :'$100.00-$450.00',
//   card : 'Add to card',
//   icon2:<i class="fa-solid fa-cart-shopping"></i>,
//   icon3:<i class="fa-regular fa-heart"></i>,
//   wish:'Wishlist'
// }]

const [data,setdata] = useState([])
const [fruit,setfruit] = useState([])
const [container,setcontainer] = useState([])

const getdata = async() =>{
  try{
    const res = await axios.get(`http://127.0.0.1:8000/api/products/fetched?cat_id=4`)
    setdata(res.data.data)
    console.log(res.data)
  }
  catch(err){
    console.log(err)
  }
}

const get = async() => {
  try{
    const res = await axios.get(`http://127.0.0.1:8000/api/products/fetched?cat_id=5`)
    setfruit(res.data.data)
    console.log(res.data)
  }
  catch(err){
    console.log(err)
  }
}

const getdatas = async() => {
  try{
    const res = await axios.get('http://127.0.0.1:8000/api/products/fetched?cat_id=1')
    setcontainer(res.data.data)
    console.log(res.data)
  }
  catch(err){
    console.log(err)
  }
}
useEffect(()=>{
  getdata();
  get();
  getdatas();
},[])

const {addToCart} = useContext(CartContext)

const {addToWishlist} = useContext(WishlistContext)

const navigate = useNavigate();

  return (
    <div className={file.mainclass}>
      <div className={file.firstsub}>
        <p>Our Favorite Organic Foods</p>
      </div>
     <div className={file.secondsub}>
          <div className={file.firstchild}>
           {data.map((item)=>(
            <div className={file.inchild}>
              <div className={file.mass}>              
                <img src={item.image} alt="" />
                </div>
              <div className={file.mass1}>
              <p className={file.v1}>{item.product_name}</p>
              <p className={file.v2}>{item.product_offer}</p>
              <p className={file.vision} onClick={() => navigate(`/product/${item.id}`)}><i class="fa-regular fa-eye"></i></p>
              </div>
              <div className={file.ins}>
              <div className={file.button}  onClick={() =>addToCart(item)}>
                <p><i class="fa-solid fa-cart-shopping"></i></p>
                <p className={file.v3}>Add to Card</p>
              </div>
              <div className={file.buts} onClick={() => addToWishlist(item)}>
                <p><i class="fa-regular fa-heart"></i></p>
                <p>Wishlist</p>
              </div>
              </div>
              </div>
           ))}
          </div>
            {/* <div className={file.secondchild}> */}
            {fruit.slice(0,1).map((item) =>(
            <div className={file.secondchild}>
            <div className={file.seinchild}>
              <img src={item.image} alt="" />
            </div>
            <div className={file.objs}>
              <p className={file.v1}>{item.product_name}</p>
              <p className={file.v2}>{item.product_offer}</p>
              <p className={file.eyes} onClick={() => navigate(`/product/${item.id}`)}><i class="fa-regular fa-eye"></i></p>
            </div>
            <div className={file.ins}>
            <div className={file.king} onClick={() =>addToCart(item)}>
              <p><i class="fa-solid fa-cart-shopping"></i></p>
              <p>Add to Card</p>
            </div>
            <div className={file.lists} onClick={() => addToWishlist(item)}>
              <p><i class="fa-regular fa-heart"></i></p>
              <p>Wishlist</p>
            </div>
            </div>
            </div>
             ))}
          {/* </div>  */}
         <div className={file.thirdchild}>
            {container.slice(0,4).map((products)=>(
            <div className={file.first}>
              <div className={file.second}>
                <img src={products.image} alt="" />
              </div>
              <div className={file.third}>
                <p className={file.v1}>{products.product_name}</p>
                <div className={file.music}>
                {/* {products.fixedprice ? <p className={file.v2}>{products.fixedprice}</p> : ''} */}
                {/* {products.originalprice ? <del className={file.v2}>{products.originalprice}</del> : ''} */}
                <p className={file.v2}>{products.product_offer}</p>
                </div>
                <p className={file.view} onClick={() => navigate(`/product/${products.id}`)}><i class="fa-regular fa-eye"></i></p>
              </div>
              <div className={file.ins}>
              <div className={file.button} onClick={() =>addToCart(products)}>
                <p><i class="fa-solid fa-cart-shopping"></i></p>
                <p  className={file.v3}>Add to Cart</p>
              </div>
              <div className={file.buts} onClick={() => addToWishlist(products)}>
                <p><i class="fa-regular fa-heart"></i></p>
                <p>Wishlist</p>
              </div>
              </div>
              </div>
            ))}
          </div>
        </div>

     </div>
  )
}

export default Aboutthirdsection