import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import change from './Bestdealsfirstsection.module.css'
import icon from '../../assert/result1.png'
import icon1 from '../../assert/result2.png'
import icon2 from '../../assert/result3.png'
import icon3 from '../../assert/result4.png'
import icon4 from '../../assert/result5.png'
import icon5 from '../../assert/result6.png'
import icon6 from '../../assert/result7.png'
import icon7 from '../../assert/result8.png'
import icon8 from '../../assert/result9.png'
import icon9 from '../../assert/result10.png'
import icon10 from '../../assert/result11.png'
import icon11 from '../../assert/result12.png'
import icon12 from '../../assert/result13.png'
import { CartContext } from '../../Cart/CartContext'
// import Data from '../../../src/Data/Data'
import { WishlistContext } from '../../Wishlist/WishlistContext'

const Bestdealsfirstsection = ({product}) => {

    const results = [{
        _id:101,
        image:icon,
        sub:'Best Deals',
        name:'Accussantium',
        originalprice:'$50.00',
        offerprice:'$45.00',
        card:'Add to card',
        high:'sale',
        symbol2:<i class="fa-regular fa-heart"></i>
},
    {
        _id:103,
        image: icon1,
        sub:"Best Deals",
        name:'assumenda est,amnis',
        originalprice:'$70.00',
        offerprice:'$65.00',
        card:'Add to card',
        high:'sale',
        symbol2:<i class="fa-regular fa-heart"></i>
    },
{
    _id:106,
    image:icon2,
    sub:'Best Deals',
    name:'distinctio',
    fixedprice:'$99.00 - $499.00',
    card:'Add to card',
    high:'sale',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:109,
    image:icon3,
    sub:'Best Deals',
    name:'et iusto odio',
    originalprice:'$55.00',
    offerprice:'$52.00',
    card:'Add to card',
    high:'sale',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:111,
    image:icon4,
    sub:'Best Deals',
    name:'magnam aliquam',
    fixedprice:'$410.00',
    card:'Add to card',
    symbol2:<i class="fa-regular fa-heart"></i>

},
{
    _id:113,
    image:icon5,
    sub:'Best Deals',
    name:'Natus error',
    originalprice:'$45.00',
    offerprice:'$42.00',
    card:'Add to card',
    high:'sale',
    symbol2:<i class="fa-regular fa-heart"></i>

},
{
    _id:114,
    image:icon6,
    sub:'Best Deals',
    name:"Nemo enim",
    fixedprice:'$30.00',
    card:'Add to Card',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:119,
    image:icon7,
    sub:'Best Deals',
    name:'Omnis iste natus',
    fixedprice:'$40.00 - $300.00',
    card:'Add to card',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:128,
    image: icon8,
    sub:'Best Deals',
    name:'Quasi architecto',
    fixedprice:"$88.00 - $99.00",
    card:'Add to card',
    high:'sale',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:129,
    image:icon9,
    sub:'Best Deals',
    name:"Quibusdam",
    originalprice:"$75.00",
    offerprice:"$50.00",
    card:"Add to card",
    high:'sale',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:131,
    image: icon10,
    sub:"Best Deals",
    name:'salt $ sugar',
    originalprice:'$60.00',
    offerprice:"$52.00",
    card:'Add to card',
    high:'sale',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:132,
    image: icon11 ,
    sub:'Best Deals',
    name:'Sunt explicabo',
    fixedprice:'$49.00 - $199.00',
    card:'Add to card',
    high:'sale',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:133,
    image: icon12,
    sub:'Best Deals',
    name:'Ut perspiciatis',
    fixedprice:"$400.00",
    card:"Add to card",
    symbol2:<i class="fa-regular fa-heart"></i>
}]

const {addToCart} = useContext(CartContext);

const {addToWishlist} = useContext(WishlistContext);

const navigate = useNavigate();

  return (
    <div className={change.wholeclass}>
        <div className={change.firstclass}>
            <p className={change.f1}>Best Deals</p>
            <p className={change.f2}>Home / Best Deals</p>
        </div>
        <div className={change.secondclass}>
            <p className={change.f3}>Showing all 13 results</p>
            <div className={change.innerchild}>
             <p className={change.f4}>Sort By:</p>
             <select name="" id="" className={change.select}>
                <option value="">Default sorting</option>
                <option value="">sort by popularity</option>
                <option value="">sort by average rating</option>
                <option value="">sort by latest</option>
                <option value="">sort by price:low to high</option>
                <option value="">sort by price:high to low</option>
             </select>
             </div>
        </div>


        <div className={change.hint}>
            {results.map((items)=>(
                <div className={change.result1} key={items._id}>
                    <div className={change.imagediv} onClick={() => navigate(`/product/${items._id}`)}>
                        <img src={items.image} alt="" />
                    </div>
                    <div className={change.content}>
                        <p className={change.f5}>{items.sub}</p>
                        <p className={change.f6}>{items.name}</p>
                        <div className={change.hide}>
                        {items.originalprice ? <del className={change.actualprice}>{items.originalprice}</del>: ""}
                        {items.offerprice ? <p className={change.discountprice}>{items.offerprice}</p> : ""}
                        {items.fixedprice ? <p className={change.fixed}>{items.fixedprice}</p> : ""}
                        </div>
                        <p className={change.but}  onClick={() => addToCart(items)}>{items.card}</p>  
                     </div>
                        {items.high ? <p className={change.obj}>{items.high}</p> :''}
                        <div className={change.symbol} onClick={() => addToWishlist(items)}>
                            <p className={change.win}>{items.symbol2}</p>
                        </div>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default Bestdealsfirstsection
