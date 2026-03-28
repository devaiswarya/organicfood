import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import queue from './Homefive.module.css'
import tomato from '../../../../src/assert/result8.png'
import onion from '../../../../src/assert/result9.png'
import egg from '../../../../src/assert/result1.png'
import orange from '../../../../src/assert/result2.png'
import spices from '../../../../src/assert/result4.png'
import juices from '../../../../src/assert/result13.png'
import pomagranate from '../../../../src/assert/result12.png'
import bottlejuice from '../../../../src/assert/result7.png'
import sugar from '../../../../src/assert/result11.png'
import peas from '../../../../src/assert/result3.png'
import bread1 from '../../../../src/assert/bread1.png'
// import bread from '../../../../src/assert/bread.png'
import bun from '../../../../src/assert/bun.png'
import est from '../../../../src/assert/est.png'
import result from '../../../../src/assert/result5.png'
import bringal from '../../../../src/assert/bringal.png'
import lemonjuices from '../../../../src/assert/lemonjuices.png'
import pineapple from '../../../../src/assert/pineapple.png'
import ipsum from '../../../../src/assert/ipsum.png'
import wholeveg from '../../../../src/assert/wholeveg.png'
import bathandwash from '../../../../src/assert/bathandhandwash.png'
import mango from '../../../../src/assert/mango.png'
import corn from '../../../../src/assert/corn.png'
import lettuce from '../../../../src/assert/lettuae.png'
import banana from '../../../../src/assert/banana.png'
import graphes from '../../../../src/assert/grapes.png'
import cheeries from '../../../../src/assert/cheeries.png'
import greenchilli from '../../../../src/assert/greenchilli.png'
import apple from '../../../../src/assert/aboutfivthimage.png'
import jui from '../../../../src/assert/result7.png'
import { CartContext } from '../../../Cart/CartContext'
import { WishlistContext } from '../../../Wishlist/WishlistContext'
const Homefive = () => {

   const object = [{
    _id:119,
    image:tomato,
    name:'Omnis iste natus',
    fixedprice:'$40.00 - $300.00',
    card:'Select Options',
    high:'-$40.00',
     symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:128,
    image:onion,
    name:'Quasi architecto',
    fixedprice:'$88.00 - $99.00',
    card:'Select Options',
     symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:101,
    image:egg,
    name:'Accusantium',
    originalprice:'50.00',
    offerprice:'$45.00',
    card:'Select Options',
    high:'$5.00',
     symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:103,
    image:orange,
    name:'assumenda est,omnis',
    originalprice:'$70.00',
    offerprice:'$65.00',
    card:'Select Options',
     high:'$5.00',
    symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:109,
    image:spices,
    name:'et iusto odio',
    originalprice:'55.00',
    offerprice:'$52.00',
     card:'Select Options',
     high:'$3.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:133,
    image:juices,
    name:'Ut perspiciatis',
    fixedprice:'$400.00',
    card:'Select Options',
     symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:132,
    image:pomagranate,
    name:'Sunt explicabo',
    fixedprice:'$49.00 - $199.00',
    card:'Select Options',
     high:'$49.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:114,
    image:bottlejuice,
    name:'Nemo enim',
    fixedprice:'$30.00',
    card:'Select Options',
     symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:131,
    image:sugar,
    name:'Salt & Sugar',
    originalprice:'$60.00',
    offerprice:'$52.00',
    card:'Select Options',
     high:'$8.00',
      symbol2:<i class="fa-regular fa-heart"></i>
  },
  {
    _id:106,
    image:peas,
    name:'distinctio',
    fixedprice:'$99.00 - $499.00',
    card:'Select Options',
     symbol2:<i class="fa-regular fa-heart"></i>
  }
] 

  const breads = [{
        _id:115,
        image:bread1,
        name:'Nihil molestiae',
        fixedprice:'$22.00',
        card:'Add to card',
         symbol2:<i class="fa-regular fa-heart"></i>
    },
{
    _id:212,
    image:bun,
    name:'Omnis dolor',
    fixedprice:'$60.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>

},
{
    _id:130,
    image:est,
    name:'Quisquam est',
    originalprice:'$15.00',
    offerprice:'$12.00',
    card:'Add to card',
    high:'$3.00',
     symbol2:<i class="fa-regular fa-heart"></i>

},
{
    _id:111,
    image:result,
    name:'Magnam aliquam',
    fixedprice:'$410.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:112,
    image:bringal,
    name:'Nam libero',
    fixedprice:'$45.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
}]

 const juice = [{
        _id:134,
        image:bottlejuice,
        name:'Voluptatem',
        fixedprice:'$410.00',
        card:'Add to card',
         symbol2:<i class="fa-regular fa-heart"></i>
    },
{
    _id:110,
    image:lemonjuices,
    name:'facere possimus',
    fixedprice:'$120.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
     _id:108,
   image:pineapple,
   name:'Ducimus qui',
   originalprice:'$24.50',
   offerprice:'$20.00',
   card:'Add to card',
   high:'$4.50',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:133,
    image:juices,
    name:'Ut perspiciatis',
    fixedprice:'$400.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:107,
    image:ipsum,
    name:'Dolorem ipsum',
    fixedprice:'$22.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:105,
    image:wholeveg,
    name:'Corporis suscipit',
    fixedprice:'$24.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
}
  
]


    const organics = [{
        _id:133,
        image:juices,
        name:'Ut perspiciatis',
        fixedprice:'$400.00',
        card:'Add to card',
         symbol2:<i class="fa-regular fa-heart"></i>
    },
     {
        _id:102,
        image:jui,
        name:'Assumenda est',
        fixedprice:'$150.00',
        card:'Add to card',
         symbol2:<i class="fa-regular fa-heart"></i>
     },
    {
        _id:117,
        image:mango,
        name:'Occaecati cupiditate',
        originalprice:'$40.00',
        offerprice:'$35.00',
        card:'Add to card',
        high:'$5.00',
         symbol2:<i class="fa-regular fa-heart"></i>
    },
{
    _id:109,
    image:spices,
    name:'et iusto odio',
    originalprice:'$55.00',
    offerprice:'$52.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:116,
    image:orange,
    name:'Non provident',
    fixedprice:'$60.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:104,
    image:bathandwash,
    name:'Bath & Handwash',
    fixedprice:'$45.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
}]


  const veg = [{
        _id:120,
        image:apple,
        name:'Organic Apples',
        fixedprice:'$100.00 - $450.00',
        card:'select options',
        high:'-$100.00',
         symbol2:<i class="fa-regular fa-heart"></i>
    },
{
    _id:123,
    image:corn,
    name:'Organic corn',
    fixedprice:'$100.00 - $320.00',
    card:'select options',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:126,
    image:lettuce,
    name:'Organic lettuce',
    fixedprice:'$20.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:121,
    image:banana,
    name:'Organic Banana',
    fixedprice:'$40.00 - $340.00',
    card:'select options',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:124,
    image:graphes,
    name:'Organic Graphes',
    fixedprice:'$40.00 - $240.00',
    card:'select options',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:119,
    image:tomato,
    name:'omnis iste natus',
    fixedprice:'$40.00 - $300.00',
    card:'select options',
    high:'-$40.00',
     symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:127,
    image:peas,
    name:'Organic peas',
    fixedprice:'$17.00',
    card:'Add to card',
     symbol2:<i class="fa-regular fa-heart"></i>
}
,
{
    _id:125,
    image:greenchilli,
    name:'Organic Green Chilli',
    fixedprice:'$20.00 $320.00',
    card:'select options',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:122,
    image:cheeries,
    name:'Organic cheeries',
    fixedprice:'$100.00 - $400.00',
    card:'select options',
    symbol2:<i class="fa-regular fa-heart"></i>
},
{
    _id:128,
    image:onion,
    name:'quasi architecto',
    fixedprice:'$88.00 - $99.00',
    card:'select options',
    symbol2:<i class="fa-regular fa-heart"></i>
}]


    const {addToCart} = useContext(CartContext);
    const {addToWishlist} = useContext(WishlistContext);
    const [page,setpage] = useState("Best deals")

    const navigate = useNavigate();

  return (
    <div className={queue.wholeclass}>

     <div className={queue.firstclass}>
          <div className={queue.first}>
            <p className={`${queue.f1} ${page === "Best deals" ? queue.mini : queue.f1}`} onClick={()=>setpage("Best deals")}>Best Deals</p>
            <p className={`${queue.f1} ${page === "Bread" ? queue.mini : queue.f1}`}  onClick={()=>setpage("Bread")}>Bread</p>
            <p className={`${queue.f1} ${page === "juice" ? queue.mini : queue.f1}`} onClick={()=>setpage('juice')}>Juices</p>
            <p className={`${queue.f1} ${page === "Organic" ? queue.mini : queue.f1}`} onClick={()=>setpage('Organic')}>Organic</p>
            <p className={`${queue.f1} ${page === "vegetables" ? queue.mini : queue.f1}`} onClick={()=>setpage('vegetables')}>Organic Vegetables & fruits</p>
          </div>
    </div>
           {page === "Best deals" && <div className={queue.firstclass}>
            <div className={queue.second}>
        {object.map((items)=>(
        <div className={queue.third}>
            <div className={queue.third1} onClick={() => navigate(`/product/${items._id}`)}>
                <img src={items.image} alt="" />
            </div>
            <div className={queue.third2}>
               <p className={queue.f2}>{items.name}</p>
            <div className={queue.rates}>      
                {items.originalprice ? <del className={queue.ori}>{items.originalprice}</del> : ''}
                {items.offerprice ?  <p className={queue.f3}>{items.offerprice}</p> : ''}
                {items.fixedprice ? <p className={queue.f3}>{items.fixedprice}</p> : ''}
            </div>
            <p className={queue.f4} onClick={() => addToCart(items)}>{items.card}</p>
          </div>
             {items.high ? <p className={queue.hint}>{items.high}</p> : ''}
            <div className={queue.symbol} onClick={() => addToWishlist(items)}>
                <p className={queue.win}>{items.symbol2}</p>
            </div>
          </div>
))}
          </div>
          </div> }

          {page === "Bread" && <div className={queue.firstclass}>
            <div className={queue.second}>
        {breads.map((items)=>(
        <div className={queue.third}>
    <div className={queue.third1} onClick={() => navigate(`/product/${items._id}`)}>
    <img src={items.image} alt="" />
    </div>
     <div className={queue.third2}>
      <p className={queue.f2}>{items.name}</p>
      <div className={queue.rates}>      
        {items.originalprice ? <del className={queue.ori}>{items.originalprice}</del> : ''}
        {items.offerprice ?  <p className={queue.f3}>{items.offerprice}</p> : ''}
        {items.fixedprice ? <p className={queue.f3}>{items.fixedprice}</p> : ''}
      </div>
      <p className={queue.f4} onClick={() => addToCart(items)}>{items.card}</p>
    </div>
    {items.high ? <p className={queue.hint}>{items.high}</p> : ''}
      <div className={queue.symbol} onClick={() => addToWishlist(items)}>
         <p className={queue.win}>{items.symbol2}</p>
      </div>
    </div>
))}
        </div>
        </div>}

        {page === "juice" &&   <div className={queue.firstclass}>
            <div className={queue.second}>
        {juice.map((items)=>(
        <div className={queue.third}>
    <div className={queue.third1} onClick={() => navigate(`/product/${items._id}`)}>
    <img src={items.image} alt="" />
    </div>
     <div className={queue.third2}>
      <p className={queue.f2}>{items.name}</p>
      <div className={queue.rates}>      
        {items.originalprice ? <del className={queue.ori}>{items.originalprice}</del> : ''}
        {items.offerprice ?  <p className={queue.f3}>{items.offerprice}</p> : ''}
        {items.fixedprice ? <p className={queue.f3}>{items.fixedprice}</p> : ''}
      </div>
      <p className={queue.f4} onClick={() => addToCart(items)}>{items.card}</p>
    </div>
    {items.high ? <p className={queue.hint}>{items.high}</p> : ''}
    <div className={queue.symbol} onClick={() => addToWishlist(items)}>
         <p className={queue.win}>{items.symbol2}</p>
    </div>
    </div>
))}
        </div>
        </div>}

        {page === "Organic" &&  <div className={queue.firstclass}>
            <div className={queue.second}>
        {organics.map((items)=>(
        <div className={queue.third}>
    <div className={queue.third1} onClick={() => navigate(`/product/${items._id}`)}>
    <img src={items.image} alt="" />
    </div>
     <div className={queue.third2}>
      <p className={queue.f2}>{items.name}</p>
      <div className={queue.rates}>      
        {items.originalprice ? <del className={queue.ori}>{items.originalprice}</del> : ''}
        {items.offerprice ?  <p className={queue.f3}>{items.offerprice}</p> : ''}
        {items.fixedprice ? <p className={queue.f3}>{items.fixedprice}</p> : ''}
      </div>
      <p className={queue.f4} onClick={() => addToCart(items)}>{items.card}</p>
    </div>
    {items.high ? <p className={queue.hint}>{items.high}</p> : ''}
    <div className={queue.symbol} onClick={() => addToWishlist(items)}>
       <p className={queue.win}>{items.symbol2}</p>
    </div>
    </div>
))}
       </div>
        </div>}

        {page === "vegetables" &&  <div className={queue.firstclass}>
            <div className={queue.second}>
        {veg.map((items)=>(
        <div className={queue.third}>
    <div className={queue.third1} onClick={() => navigate(`/product/${items._id}`)}>
    <img src={items.image} alt="" />
    </div>
     <div className={queue.third2}>
      <p className={queue.f2}>{items.name}</p>
      <div className={queue.rates}>      
        {items.originalprice ? <del className={queue.ori}>{items.originalprice}</del> : ''}
         {items.offerprice ?  <p className={queue.f3}>{items.offerprice}</p> : ''}
        {items.fixedprice ? <p className={queue.f3}>{items.fixedprice}</p> : ''}
      </div>
      <p className={queue.f4} onClick={() => addToCart(items)}>{items.card}</p>
    </div>
    {items.high ? <p className={queue.hint}>{items.high}</p> : ''}
    <div className={queue.symbol} onClick={() => addToWishlist(items)}>
        <p className={queue.win}>{items.symbol2}</p>
    </div>
    </div>
))}  
       </div>
        </div>}



    </div>
  )
}

export default Homefive