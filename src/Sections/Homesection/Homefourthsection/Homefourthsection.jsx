import React from 'react'
import object from './Homefourthsection.module.css'
import human from '../../../../src/assert/human.png'
import whole from '../../../../src/assert/wholeveg.png'
import juicebottle from '../../../../src/assert/bottlejuice.png'
import graphes from '../../../../src/assert/graphes1.png'
const Homefourthsection = () => {
  return (
    <div className={object.wholeclass}>
        <div className={object.firstclass}>
            <div className={object.first}>
                <p className={object.f1}>Get 15% discount on your first Purchase</p>
                <p className={object.f2}>Donec sed mauris non quam molestie imperdiet.</p>
                <p className={object.f2}>Integer ullamcorper, purus sit amet hendrerit tincidunt</p>
                <p className={object.f3}>Shop Now</p>
                </div>
                <div className={object.whole}>
                <img src={whole} alt="" />
            </div>
            <div className={object.second}>
                <img src={human} alt="" />
            </div>
        </div>
        <div className={object.secondclass}>
            <div className={object.secondfull}>
                <p>Shop by Lifestyle</p>
            </div>
            <div className={object.secondchild}>
                <div className={object.king}>
                 <p className={object.king5}><i class="fa-solid fa-leaf"></i></p>
                 <p className={object.m1}>Plant Based</p>
                </div>
                <div className={object.king}>
                    <p className={object.king1}><i class="fa-regular fa-heart"></i></p>
                    <p className={object.m1}>Keto Diet</p>
                </div>
                <div className={object.king}>
                  <p className={object.king2}><i class="fa-brands fa-canadian-maple-leaf"></i></p>
                  <p className={object.m1}>Vegan</p>
                </div>
                <div className={object.king}>
                   <p className={object.king3}><i class="fa-solid fa-carrot"></i></p>
                   <p className={object.m1}>Atkins Diet</p>
                </div>
                <div className={object.king}>
                   <p className={object.king4}><i class="fa-solid fa-snowflake"></i></p>
                   <p className={object.m1}>Zone Diet</p>
                </div>
            </div>
        </div>
        <div className={object.thirdclass}> 
            <div className={object.thirdchild1}>
                <div className={object.inchild}>
                    <p className={object.m2}>Organic Juices</p>
                    <p  className={object.m3}>Shop Now</p>
                </div>
                <div className={object.herit}>
                    <img src={juicebottle} alt="" />
                </div>
            </div>
            <div className={object.thirdchild2}>
                <div className={object.inchild }>
                    <p className={object.m2}>Fresh Fruits</p>
                    <p className={object.m3}>Shop Now</p>
                </div>
                <div className={object.herit}>
                    <img src={graphes} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Homefourthsection