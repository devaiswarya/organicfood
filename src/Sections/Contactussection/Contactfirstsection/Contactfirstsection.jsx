import React from 'react'
import design from './Contactfirstsection.module.css'

const Contactfirstsection = () => {
  return (
    <div className={design.wholeclass}>
        <div className={design.secondclass}>
      <iframe title="London eye" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near" loading='lazy' style={{width:'100%',height:'100%'}}></iframe>
    </div>
    </div>
  )
}

export default Contactfirstsection
