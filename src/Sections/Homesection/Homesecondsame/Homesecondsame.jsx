import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import bin from './Homesecondsame.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/pagination";
import bottlejuices from '../../../../src/assert/result13.png'
import spices from '../../../../src/assert/result4.png'
import juices from '../../../../src/assert/result7.png'
import orange from '../../../../src/assert/result2.png'
import mango from '../../../../src/assert/mango.png'
import bathandwash from '../../../../src/assert/bathandhandwash.png'
import CartContext from '../../../Cart/CartContext';
import { WishlistContext } from '../../../Wishlist/WishlistContext';

const Homesecondsame = () => {

    const item=[
    {
    _id:119,
    image:[bottlejuices],
    name:'omnis iste natus',
    fixedprice:'$400.00',
    card:'select options',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:133,
    image:[spices],
    name:'Ut perspiciatis',
    originalprice:'$55.00',
    offerprice:'$52.00',
    card:'Add to cart',
    high:'-$3.00',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:133,
    image:[juices],
    name:'Ut perspiciatis',
    fixedprice:'$150.00',
    card:'Add to cart',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:116,
    image:[orange],
    name:'Ut perspiciatis',
    fixedprice:'$60.00',
    card:'Add to cart',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:117,
    image:[mango],
    name:'Ut perspiciatis',
    originalprice:'$40.00',
    offerprice:'$35.00',
    card:'Add to cart',
    high:'-$3.00',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:104,
    image:[bathandwash],
    name:'Ut perspiciatis',
    fixedprice:'$45.00',
    card:'Add to cart',
    symbol2:<i class="fa-regular fa-heart"></i>
  }]

  const {addToCart} = useContext(CartContext);

  const {addToWishlist} = useContext(WishlistContext);

  const navigate = useNavigate();

  return (
         <div className={bin.wholeclass}>
        <div className={bin.firstclass}>
            <p className={bin.f1}>Trending Products</p>
        </div>
        <div className={bin.secondclass}>
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
      {item.map((items,index)=>(
    <SwiperSlide key={index}>
        <div className={bin.inchild} key={index}>
       
              {items.image.map((image,index)=>(
             
                  <div className={bin.imagediv} key={index} onClick={() => navigate(`/product/${items._id}`)}>
                    <img src={image} alt="" />
                  </div>))}  
         <div className={bin.details}>
          <p className={bin.f2}>{items.name}</p>
          <div className={bin.sample}>
            {items.originalprice ? <del className={bin.delete}>{items.originalprice}</del> : ''}
            {items.fixedprice ? <p className={bin.f3}>{items.fixedprice}</p>:''}
            {items.offerprice ? <p className={bin.f3}>{items.offerprice}</p> : ''}
          </div> 
          <p className={bin.sale} onClick={() => addToCart(items)}>{items.card}</p>
          {items.high ? <p className={bin.high}>{items.high}</p> : ''}
          </div>
           <div className={bin.symbol} onClick={() => addToWishlist(items)}>
              <p className={bin.win}>{items.symbol2}</p>
            </div>
          </div>
    </SwiperSlide>   
      ))}
      </Swiper>
      </div>


        </div>
  )
}

export default Homesecondsame