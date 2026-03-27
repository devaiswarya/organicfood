import React from 'react'
import snow from './Homesixthsection.module.css'
import human from '../../../../src/assert/humans.png'

const Homesixthsection = () => {
  return (
    <div className={snow.wholeclass}>
        <div className={snow.firstclass}>
            <p className={snow.f1}>Client Testimonials</p>
        </div>
        <div className={snow.secondclass}>
              <div className={snow.secondfirstchild}>
                 <div className={snow.same}>
                    <div className={snow.m1}>
                        <i class="fa-solid fa-quote-left"></i>
                    </div>
                    <div className={snow.f2}>
                        <p className={snow.b1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className={snow.b2}>
                            <img src={human} alt="" />
                        </p>
                        <div>
                        <p className={snow.b3}>Mary</p>
                        <p className={snow.b4}>Dietician</p>
                        </div>
                    </div>
                 </div>
                 <div className={snow.same}>
                      <div className={snow.m1}>
                        <i class="fa-solid fa-quote-left"></i>
                    </div>
                    <div className={snow.f2}>
                        <p className={snow.b1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className={snow.b2}>
                            <img src={human} alt="" />
                        </p>
                        <div>
                        <p className={snow.b3}>Mary</p>
                        <p className={snow.b4}>Dietician</p>
                        </div>
                    </div>
                 </div>
                 <div className={snow.same}>
                      <div className={snow.m1}>
                        <i class="fa-solid fa-quote-left"></i>
                    </div>
                    <div className={snow.f2}>
                        <p className={snow.b1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className={snow.b2}>
                            <img src={human} alt="" />
                        </p>
                        <div>
                        <p className={snow.b3}>Mary</p>
                        <p className={snow.b4}>Dietician</p>
                        </div>
                    </div>
                 </div>
              </div>
              <div className={snow.secondsecondchild}>
                <div className={snow.child}>                
                    <p>Learn More</p>
                </div>
                </div>
                <div className={snow.thirdchilds}>
                    <div className={snow.hint}>
                        <p className={snow.k1}><i class="fa-solid fa-tractor"></i></p>
                        <div>
                        <p className={snow.k2}>Free Shipping</p>
                        <p className={snow.k3}>From $350</p>
                        </div>
                    </div>
                    <div className={snow.hint}>
                        <p className={snow.k1}><i class="fa-solid fa-leaf"></i></p>
                        <div>
                        <p className={snow.k2}>Only Organic</p>
                        <p className={snow.k3}>100% Guarantee</p>
                        </div>
                    </div>
                    <div className={snow.hint}>
                        <p className={snow.k1}><i class="fa-brands fa-paypal"></i></p>
                        <div>
                        <p className={snow.k2}>Payment Method</p>
                        <p className={snow.k3}>Secure Payment</p>
                        </div> 
                   </div>
                    <div className={snow.hint}>
                        <p className={snow.k1}><i class="fa-solid fa-headset"></i></p>
                        <div>
                        <p className={snow.k2}>Support 24/7</p>
                        <p className={snow.k3}>Black Bread</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Homesixthsection