import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import king from './Homesecondsection.module.css'
import cheerirs from '../../../assert/result8.png'
import juice from '../../../../src/assert/result13.png'
import onion from '../../../../src/assert/result9.png'
import poma from '../../../../src/assert/result12.png'
import egg from '../../../../src/assert/result1.png'
import sugar from '../../../../src/assert/result11.png'
import bottlejuice from '../../../../src/assert/result7.png'
import orange from '../../../../src/assert/result2.png'
import spices from '../../../../src/assert/result4.png'
import peas from '../../../../src/assert/result3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/pagination";
import CartContext from '../../../Cart/CartContext'
import { WishlistContext } from '../../../Wishlist/WishlistContext'

const Homesecondsection = () => {

  
  const connect=[
    {
    _id:119,
    image:[cheerirs],
    name:'omnis iste natus',
    fixedprice:'$40.00 - $300.00',
    card:'select options',
    high:'-$40.00',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:133,
    image:[juice],
    name:'Ut perspiciatis',
    fixedprice:'$400.00',
    card:'Add to cart',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:128,
    image:[onion],
    name:'Quasi architectto',
    fixedprice:'$88.00 - $99.00',
    card:'select options',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:132,
    image:[poma],
    name:'Sunt explicabo',
    fixedprice:'$49.00 - $199.00',
    card:'select options',
    high:'-$49.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:101,
    image:[egg],
    name:'Accusantium',
    Originalprice:'%50.00',
    offerprice:'$45.00',
    card:'Add to cart',
    high:'-$5.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:114,
    image:[bottlejuice],
    name:'Nemo enim',
    fixedprice:'$30.00',
    card:'Add to cart',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:103,
    image:[orange],
    name:'assumenda est,omnis',
    originalprice:'$70.00',
    offerprice:'$65.00',
    card:'Add to cart',
    high:'-$5.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:131,
    image:[sugar],
    name:'Salt & Sugar',
    originalprice:'$60.00',
    offerprice:'$52.00',
    card:'Add to cart',
    high:'-$8.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:109,
    image:[spices],
    name:'et iusto odio',
    originalprice:'$55.00',
    offerprice:'$52.00',
    card:'Add to cart',
    high:'-$3.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:106,
    image:[peas],
    name:'distinctio',
    fixedprice:'$99.00 - $499.00',
    card:'select options',
      symbol2:<i class="fa-regular fa-heart"></i>
  }
]

const {addToCart} = useContext(CartContext);

const {addToWishlist} = useContext(WishlistContext);

const navigate = useNavigate();


  return (
    <div className={king.wholeclass}>
        <div className={king.firstclass}>
            <p className={king.f1}>Best Sellers</p>
        </div>
        <div className={king.secondclass}>
 <Swiper
      spaceBetween={10}
      modules={[ Navigation]}
      slidesPerView={5}
       breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: {slidesPerView: 5}
       }}
      navigation>
      {connect.map((items,index)=>(
    <SwiperSlide key={index}>
        <div className={king.inchild} key={index}>
       
              {items.image.map((image,index)=>(
             
                  <div className={king.imagediv} key={index} onClick={() => navigate(`/product/${items._id}`)}>
                    <img src={image} alt="" />
                  </div>))}  
         <div className={king.details}>
          <p className={king.f2}>{items.name}</p>
          <div className={king.sample}>
            {items.originalprice ? <del className={king.delete}>{items.originalprice}</del> : ''}
            {items.offerprice ? <p className={king.f3}>{items.offerprice}</p> : ''}
            {items.fixedprice ? <p className={king.f3}>{items.fixedprice}</p> : ''}
          </div> 
          <p className={king.sale} onClick={() => addToCart(items)}>{items.card}</p>
          {items.high ? <p className={king.high}>{items.high}</p> : ''}
          </div>
           <div className={king.symbol} onClick={() => addToWishlist(items)}>
              <p className={king.win}>{items.symbol2}</p>
            </div>
          </div>
    </SwiperSlide>   
      ))}
      </Swiper>
      </div>


        </div>
  )
}

export default Homesecondsection