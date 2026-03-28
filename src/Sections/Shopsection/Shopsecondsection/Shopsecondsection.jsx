import React, { useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import snap from './Shopsecondsection.module.css'
import pro1 from '../../../../src/assert/result2.png'
import mango from '../../../../src/assert/mango.png'
import bun from '../../../../src/assert/bun.png'
import cheeries from '../../../../src/assert/result8.png'
import apple from '../../../../src/assert/aboutfivthimage.png'
import banana from '../../../../src/assert/banana.png'
import blueberry from '../../../../src/assert/cheeries.png'
import corn from '../../../../src/assert/corn.png'
import graphes from '../../../../src/assert/grapes.png'
import greenchilli from '../../../../src/assert/greenchilli.png'
import lattuae from '../../../../src/assert/lettuae.png'
import onion from '../../../../src/assert/result9.png'
import peas from '../../../../src/assert/result3.png'
import bananas from '../../../../src/assert/result10.png'
import est from '../../../../src/assert/est.png'
import sugar from '../../../../src/assert/result11.png'
import pomagranate from '../../../../src/assert/result12.png'
import egg from '../../../../src/assert/result1.png'
import juice from '../../../../src/assert/result7.png'
import bathandhandwash from '../../../../src/assert/bathandhandwash.png'
import wholeveg from '../../../../src/assert/wholeveg.png'
import ipsum from '../../../../src/assert/ipsum.png'
import pineapple from '../../../../src/assert/pineapple.png'
import spicesbox from '../../../../src/assert/result4.png'
import lemonjuices from '../../../../src/assert/lemonjuices.png'
import buns from '../../../../src/assert/result5.png'
import bringal from '../../../../src/assert/bringal.png'
import watermelon from '../../../../src/assert/result6.png'
import bread from '../../../../src/assert/bread.png'
import mintjuice from '../../../../src/assert/result13.png'
import bottlejuice from '../../../../src/assert/bottlejuice.png'
import { CartContext } from '../../../Cart/CartContext'
// import Data from '../../../Data/Data'
import { WishlistContext } from '../../../Wishlist/WishlistContext'

const Shopsecondsection = () => {
      const items = [
        {
          _id:117,
          image:mango,
          sub:'Organic',
          name:'Occaecati cupiditate',
          originalprice:'$40.00',
          offerprice:'$35.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:118,
          image:bun,
          sub:'bread',
          name:'Omnis dolor',
          fixedprice:'$60.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
      {
          _id:119,
          image:cheeries,
          sub:'Best Deals',
          name:'Omins iste natus',
          fixedprice:'$40.00 - $300.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:120,
          image:apple,
          sub:'Organic Vegtables Fruits',
          name:'Organic Apples',
          fixedprice:'$100.00 - $450.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:121,
          image:banana,
          sub:'Organic Vegetables & Fruits',
          name:'organic Banana',
          fixedprice:'$40.00 - 4340.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:122,
          image:blueberry,
          sub:'organic vegetables & Fruits',
          name:'Organic Cheeries',
          fixedprice:'$100.00 - $400.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:123,
          image:corn,
          sub:'Organic Vegetables & Fruits',
          name:'Organic Corn',
          fixedprice:'$100.00 - $320.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:124,
          image:graphes,
          sub:'Organic Vegetables & Fruits',
          name:'Organic Grapes',
          fixedprice:'$40.00 - $240.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:125,
          image:greenchilli,
          sub:'Organic Vegetables & Fruits',
          name:'Organic Green Chillies',
          fixedprice:'$20.00 - $320.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:126,
          image:lattuae,
          sub:'Organic Vegetables & Fruits',
          name:'Organic lettuce',
          fixedprice:'$20.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:128,
          image:onion,
          sub:'Best Deals',
          name:'Quasi architecto',
          fixedprice:'$88.00 - $99.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:127,
          image:peas,
          sub:'Organic Vegetables & Fruits',
          name:'Organic Peas',
          fixedprice:'$17.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:129,
          image:bananas,
          sub:'Best Deals',
          name:'Quibusdam',
          originalprice:'$75.00',
          offerprice:'$50.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:130,
          image:est,
          sub:'Bread',
          name:'Quisquam est',
          originalprice:'$15.00',
          offerprice:'$12.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:131,
          image:sugar,
          sub:'Best Deals',
          name:'Salt & Sugar',
          originalprice:'$60.00',
          offerprice:'$52.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:132,
          image:pomagranate,
          sub:'Best Deals',
          name:'Sunt explicabo',
          fixedprice:'$49.00 - $199.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:101,
          image:egg,
          sub:'Best Deals',
          name:'Accusantium',
          originalprice:'$50.00',
          offerprice:'$45.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:102,
          image:juice,
          sub:'Organic',
          name:'Assumenda est',
          fixedprice:'$150.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:104,
          image:bathandhandwash,
          sub:'Organic',
          name:'Bath & Handwash',
          fixedprice:'$45.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:105,
          image:wholeveg,
          sub:'Juices',
          name:'Corporis suscipit',
          fixedprice:'$24.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:106,
          image:peas,
          sub:'Best Deals',
          name:'distinctio',
          fixedprice:'$99.00 - $499.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:107,
          image:ipsum,
          sub:'Juices',
          name:'Dolorem ipsum',
          fixedprice:'$22.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:108,
          image:pineapple,
          sub:'Juices',
          name:'Ducimus qui',
          originalprice:'$24.50',
          offerprice:'$20.00',
          card:'Add to Card',
          high:'Sale',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
        {
          _id:109,
          image:spicesbox,
          sub:'Best Deals',
          name:'et iusto odio',
          originalprice:'$55.00',
          offerprice:'$52.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:110,
          image:lemonjuices,
          sub:'Juices',
          name:'Facere possimus',
          fixedprice:'$120.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
           {
          _id:111,
          image:buns,
          sub:'Best Deals',
          name:'Magnam aliquam',
          fixedprice:'$410.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:112,
          image:bringal,
          sub:'Bread',
          name:'Nam libero',
          fixedprice:'$45.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
          {
          _id:113,
          image:watermelon,
          sub:'Best Deals',
          name:'Natus error',
          originalprice:'$45.00',
          offerprice:'$42.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:114,
          image:juice,
          sub:'Best Deals',
          name:'Nemo enim',
          fixedprice:'$30.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:115,
          image:bread,
          sub:'Bread',
          name:'Nihil molestiae',
          fixedprice:'$22.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:116,
          image:pro1,
          sub:'Organic',
          name:'Non provident',
          fixedprice:'$60.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:133,
          image:mintjuice,
          sub:'Best Deals',
          name:'Ut perspiciatis',
          fixedprice:'$400.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        },
         {
          _id:134,
          image:bottlejuice,
          sub:'Juices',
          name:'Voluptatem',
          fixedprice:'$410.00',
          card:'Add to Card',
          symbol2:<i class="fa-regular fa-heart"></i>
        }
      ];

      const navigate = useNavigate();

      const [currentpage,setcurrentpage] = useState(1)
      const [postperpage,setpostperpage] = useState(12)
      
      const indexoflastpage = currentpage * postperpage

      const indexoffirstpage = indexoflastpage - postperpage

      const collection = items.slice(indexoffirstpage,indexoflastpage)

      const totalpage = Math.ceil(items.length/postperpage)

      const {addToCart} = useContext(CartContext);

      const {addToWishlist} = useContext(WishlistContext);
  return (
    <div>
    <div className={snap.container}>
    {collection.map((items)=>(
      <div className={snap.firstchild}>
      <div className={snap.imagedivs} onClick={() => navigate(`/product/${items._id}`)}>
        <img src={items.image} alt="" />
      </div>
      <div className={snap.contents}>
        <p className={snap.s1}>{items.sub}</p>
        <p className={snap.s2}>{items.name}</p>
        <div className={snap.s3}>
          {items.originalprice ? <del className={snap.s5}>{items.originalprice}</del>: ''}
          {items.offerprice ? <p className={snap.s6}>{items.offerprice}</p> : ''}  
          {items.fixedprice ? <p className={snap.s4}>{items.fixedprice}</p>:""}
        </div>
        <p className={snap.buttons}  onClick={() => addToCart(items)}>{items.card}</p>
      </div>
         {items.high ? <p className={snap.sale}>{items.high}</p> : ''}
          <div className={snap.symbol} onClick={() => addToWishlist(items)}>
              <p className={snap.win}>{items.symbol2}</p>
          </div>
        </div>
    ))}
 </div>
    <div className={snap.secondchild}>
      <div className={snap.box}>
        <p className={`${snap.bin} ${currentpage === 1 ? snap.mode :''}`} onClick={()=>setcurrentpage(prev => prev -1)}><i class="fa-solid fa-arrow-left"></i></p>
      {[...Array(totalpage)].map((_,index)=>(
        <p className={`${snap.bin} ${currentpage === index + 1 ? snap.active : ''}`} onClick={()=>setcurrentpage(index + 1)} key={index + 1}>{index+1}</p>
      ))}
        <p className={`${snap.bin} ${currentpage === totalpage ? snap.mode : ''}`} onClick={() => setcurrentpage(prev => prev+1)}><i class="fa-solid fa-arrow-right"></i></p>
        </div>
    </div>
   </div>
  )
}

export default Shopsecondsection