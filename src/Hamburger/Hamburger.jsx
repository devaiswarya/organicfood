import React from 'react'
import neat from './Hamburger.module.css'
import { Link } from 'react-router-dom'

const Hamburger = ({drawerOpen,setDrawerOpen}) => {
  return (
     <div className={`${neat.drawer} ${drawerOpen ? neat.open : ''}`}>
        <div className={neat.firstclass}>
            <p>CLOSE</p>
            <p onClick={() => setDrawerOpen(false)}>X</p>
        </div>
        <div className={neat.secondclass}>
            <p>MENU</p>
        </div>
        <div className={neat.third}>
    <div className={neat.thirdclass}>
      <p onClick={() =>setDrawerOpen(false)}><Link to={'/'}>Home</Link></p>
      <p onClick={() =>setDrawerOpen(false)}><Link to={'/Bestdeals'}>BestDeals</Link></p>
      <p onClick={() =>setDrawerOpen(false)}><Link to={'/about'}>About</Link></p>
      <p onClick={() =>setDrawerOpen(false)}><Link to={'/contactus'}>Contact Us</Link></p>
      <p onClick={() =>setDrawerOpen(false)}><Link to={'/shop'}>Shop</Link></p>
      </div>
      </div>
    </div>
  )
}

export default Hamburger