import React from 'react'
import cycle from './Shopfirstsection.module.css'

const Shopfirstsection = () => {
  return (
    <div className={cycle.wholeclass}>
        <div className={cycle.mainclass}>
            <p className={cycle.d1}>Shop</p>
            <p className={cycle.d2}>Home / Shop</p>
        </div>

        <div  className={cycle.secondaryclass}>
          <p className={cycle.d3}>Showing 1-16 of 34 results</p>
          <div className={cycle.miniclass}>
            <p className={cycle.d3}>Sort By:</p>
            <select name="" id="" className={cycle.d4}>
              <option value="">Default Sorting</option>
              <option value="">Sort by popularity</option>
              <option value="">Sort by average rating</option>
              <option value=""> Sort by latest</option>
              <option value="">Sort by price:low to high</option>
              <option value="">Sort by price:high to low</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default Shopfirstsection