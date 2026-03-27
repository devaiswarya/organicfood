import React from 'react'
import high from './Homefirstsection.module.css'
import icon from '../../../../src/assert/wholeveg.png'
import icon1 from '../../../../src/assert/result13.png'
import icon2 from '../../../../src/assert/corns.png'
import icon3 from '../../../../src/assert/chilli.png'

const Homefirstsection = () => {
  return (
    <div className={high.whole}>
        <div className={high.firstclass}>
            <div className={high.secondclass}>
                <div className={high.oneclass}>
                <div className={high.one}>
                    <div className={high.onesub}>
                    <p className={high.f2}>FARM FRESH</p>
                    <p className={high.f3}>Organic & Healthy</p>
                    <div className={high.f4}>
                    <p>Donec sed mauris non quam molestie imperdiet.</p>
                    <p>Integer ullamcorper, purus sit amet hendrerit tincidunt</p>
                    </div>
                    </div>
                    <div className={high.onessub}>
                        <img src={icon} alt="" />
                    </div>
                </div>
                </div>
                <div className={high.twoclass}>
                <div className={high.three}>
                    <div className={high.three1}>
                    <p className={high.f5}>Healthy Juices</p>
                    <p className={high.f1}>show now</p>
                    </div>
                    <div className={high.three2}>
                        <img src={icon1} alt="" />
                    </div>
                </div>
                <div className={high.four}>
                    <div className={high.foursub}>
                        <p className={high.f6}>Farm Fresh</p>
                        <p className={high.f1}>shop Now</p>
                    </div>
                    <div className={high.foursub1}>
                        <img src={icon2} alt="" />
                    </div>
                </div>
                </div>
            </div>
            <div className={high.thirdclass}>
                <div className={high.five}>
                    <div className={high.fivechild}>
                        <p className={high.organic}>Organic Fruits</p>
                        <p className={high.f1}>show Now</p>
                    </div>
                </div>
                <div className={high.six}>
                    <div className={high.sixsub}>
                    <p className={high.f7}>Organic Spices</p>
                    <p className={high.f1}>Shop Now</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homefirstsection