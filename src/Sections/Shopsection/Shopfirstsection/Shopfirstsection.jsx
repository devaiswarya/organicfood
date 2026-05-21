import React, { useContext, useEffect, useState } from 'react'
import cycle from './Shopfirstsection.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../Cart/CartContext'
import { WishlistContext } from '../../../Wishlist/WishlistContext'

const Shopfirstsection = () => {

  const [data, setdata] = useState([]) // used to fetch the product from the API
  const [datas, setdatas] = useState([])  //used to fetch the category name from the API

  const [search, setsearch] = useState('1')
  const [sort, setsort] = useState('low')

  const [currentpage, setcurrentpage] = useState(1)

  const limit = 5

  const [totalpage, settotalpage] = useState(1)

  const navigate = useNavigate()

  const { addToCart } = useContext(CartContext)
  const { addToWishlist } = useContext(WishlistContext)

  // FETCH PRODUCTS
  // const getdata = async () => {

  //   const offset = currentpage - 1

  //   const res = await axios.get(
  //     `http://127.0.0.1:8000/api/products/fetched?cat_id=${search}&sort=${sort}&limit=${limit}&offset=${offset}`
  //   )

  //   setdata(res.data.data)

  //   // backend should return total count
  //   settotalpage(Math.ceil(res.data.total / limit))

  //   console.log(res.data)
  // }

  useEffect(() => {

    const getdata = async () => {

      const offset = currentpage - 1

      const res = await axios.get(
        `https://backend-apqk.onrender.com/api/products/fetched?cat_id=${search}&sort=${sort}&limit=${limit}&offset=${offset}`
      )

      setdata(res.data.data)

      settotalpage(Math.ceil(res.data.total / limit))
    }

    getdata()

  }, [search, sort, currentpage])
  // FETCH CATEGORIES


  useEffect(() => {
    const getdatas = async () => {
      const res = await axios.get(
        `https://backend-apqk.onrender.com/api/categories/fetched`
      )

      setdatas(res.data.data)

      console.log(res.data)
    }
    getdatas()
  }, [])

  return (
    <div className={cycle.wholeclass}>

      <div className={cycle.mainclass}>
        <p className={cycle.d1}>Shop</p>
        <p className={cycle.d2}>Home / Shop</p>
      </div>

      <div className={cycle.secondaryclass}>

        <p className={cycle.d3}>
          Showing {data.length} products
        </p>

        <div className={cycle.miniclass}>
          <p className={cycle.d3}>Categories By:</p>

          <select
            className={cycle.d4}
            onChange={(e) => {
              setsearch(e.target.value)
              setcurrentpage(1)
            }}
          >
            {datas.map((items, index) => (
              <option key={index} value={items.id}>
                {items.name}
              </option>
            ))}
          </select>
        </div>

        <div className={cycle.miniclass}>
          <p className={cycle.d3}>Sort By:</p>

          <select
            className={cycle.d4}
            onChange={(e) => {
              setsort(e.target.value)
              setcurrentpage(1)
            }}>
            <option value="low">
              Sort by price: low to high
            </option>

            <option value="high">
              Sort by price: high to low
            </option>
          </select>
        </div>

      </div>

      {/* PRODUCTS */}

      <div className={cycle.container}>

        {data.length >= 1 ? (
          data.map((items) => (
            <div className={cycle.firstchild} key={items.id}>

              <div
                className={cycle.imagedivs}
                onClick={() => navigate(`/product/${items.id}`)}
              >
                <img src={items.image} alt="" />
              </div>

              <div className={cycle.contents}>

                <p className={cycle.s1}>
                  {items.category.name}
                </p>

                <p className={cycle.s2}>
                  {items.product_name}
                </p>

                <div className={cycle.s3}>

                  <del className={cycle.s5}>
                    {items.product_price}
                  </del>

                  <p className={cycle.s6}>
                    {items.product_offer}
                  </p>

                </div>

                <p
                  className={cycle.buttons}
                  onClick={() => addToCart(items)}>
                  Add to cart
                </p>

              </div>
              {/* 
              {items.high ? (
                <p className={cycle.sale}>
                  {items.high}
                </p>
              ) : ''} */}

              <div
                className={cycle.symbol}
                onClick={() => addToWishlist(items)}
              >
                <p className={cycle.win}>
                  <i class="fa-regular fa-heart"></i>
                </p>
              </div>

            </div>
          ))
        ) : (
          <p>No Products Found</p>
        )}

      </div>

      {/* PAGINATION */}

      <div className={cycle.secondchild}>
        <div className={cycle.box}>

          {/* PREV */}

          <p
            className={`${cycle.bin} ${currentpage === 1 ? cycle.mode : ''}`}
            onClick={() => {
              if (currentpage > 1) {
                setcurrentpage(prev => prev - 1)
              }
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </p>

          {/* PAGE NUMBERS */}

          {[...Array(totalpage)].map((_, index) => (
            <p
              key={index + 1}
              className={`${cycle.bin} ${currentpage === index + 1 ? cycle.active : ''}`}
              onClick={() => setcurrentpage(index + 1)}
            >
              {index + 1}
            </p>
          ))}

          {/* NEXT */}

          <p
            className={`${cycle.bin} ${currentpage === totalpage ? cycle.mode : ''}`}
            onClick={() => {
              if (currentpage < totalpage) {
                setcurrentpage(prev => prev + 1)
              }
            }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Shopfirstsection