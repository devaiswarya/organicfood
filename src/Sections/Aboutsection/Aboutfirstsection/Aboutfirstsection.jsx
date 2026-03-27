import React from 'react'
import mini from './Aboutfirstsection.module.css'
import fruit from '../../../assert/aboutfirstimage.png'

const Aboutfirstsection = () => {
  return (
    <div className={mini.wholeclass}>
        <div className={mini.firstclass}>
            <div className={mini.firstsubclass}>
                <p className={mini.p1}>We Prefer only Organic Foods</p>
                <p className={mini.p2}>Donec diam diam, mattis imperdiet est vitae, faucibus molestie nisi. Aliquam sed risus nec arcu rhoncus molestie pretium non neque. Suspendisse eu ex ligula. Vestibulum maximus tellus metus, eget volutpat mi volutpat eget. Sed tempus erat at cursus facilisis. Maecenas id justo libero. Suspendisse quis tortor at odio pulvinar porttitor non sed mauris.</p>
            </div>
            <div className={mini.secondsubclass}>
                <img src={fruit} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Aboutfirstsection