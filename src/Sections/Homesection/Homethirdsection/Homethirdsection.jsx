import React from 'react'
import sky from './Homethirdsection.module.css'
import spices from '../../../../src/assert/result4.png'
import bun from '../../../../src/assert/result5.png'
import lemon from '../../../../src/assert/lemonjuices.png'

function Homethirdsection() {
  return (
    <div className={sky.wholeclass}>
        <div className={sky.firstclass}>
            <div>
            <p className={sky.f1}>Today's Deals</p>
            </div>
            <div className={sky.secondclass}>
                <div className={sky.first}>
                    <div className={sky.infirst}>
                        <img src={spices} alt="" />
                    </div>
                    <div className={sky.in1first}>
                        <p className={sky.s1}>FARM FRESH</p>
                        <p className={sky.s2}>Daliy Uses</p>
                         <p className={sky.s3}>check now</p>
                    </div>
                </div>
                <div className={sky.second}>
                    <div className={sky.infirst}>
                        <img src={bun} alt="" />
                    </div>
                    <div className={sky.in1first}>
                        <p className={sky.s1}>100% ORGANIC</p>
                        <p className={sky.s2}>Fresh Breads</p>
                        <p className={sky.s3}>check now</p>
                    </div>
                </div>
                <div className={sky.third}>
                    <div className={sky.infirst}>
                        <img src={lemon} alt="" />
                    </div>
                    <div className={sky.in1first}>
                        <p className={sky.s1}>100% ORGANIC</p>
                        <p className={sky.s2}>HEALTHY JUICES</p>
                        <p className={sky.s3}>check now</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homethirdsection