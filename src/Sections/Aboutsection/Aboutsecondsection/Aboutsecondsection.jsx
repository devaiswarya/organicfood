import React from 'react'
import combo from './Aboutsecondsection.module.css'

const Aboutsecondsection = () => {
  return (
    <div className={combo.wholeclass}>
        <div className={combo.first}>
            <div className={combo.child}>
                <p className={combo.p3}>450+</p>
                <p className={combo.p4}>items</p>
            </div>
            <div className={combo.child}>
                <p className={combo.p3}>300+</p>
                <p className={combo.p4}>STORES</p>
            </div>
            <div className={combo.child}>
                <p className={combo.p3}>40,000+</p>
                <p className={combo.p4}>HAPPY USERS</p>
            </div>
            <div className={combo.child}>
                <p className={combo.p3}>7,889+</p>
                <p className={combo.p4}>5 STAR REVIEWS</p>
            </div>

        </div>

    </div>
  )
}

export default Aboutsecondsection