import React from 'react'
import model from './Footer.module.css'

const Footer = () => {
  return (
    <div className={model.wholeclass}>
      <div className={model.firstclass}>
        <div className={model.first}>
            <div className={model.second}>
            <p>Welcome</p>
            </div>
            <div className={model.third}>
                <p>Nullam porttitor pharetra ullamcorper. Praesent varius erat vitae nibh. Suspendisse consectetur ipsum augue, a varius enim tempus aade varius erat vitae nibh.</p>
            </div>
        </div>
        <div className={model.first}>
            <div className={model.second}>
                <p>Connect With Us</p>
            </div>
            <div className={model.third}>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Whatsapp</p>
            </div>
        </div>
        <div className={model.first}>
            <div className={model.second}>
                <p>Useful Link</p>
            </div>
            <div className={model.third}>
                <p>Multiple Branches Take Franchise Scheduled Offers More Links</p>
            </div>
        </div>
        <div className={model.first}>
            <div className={model.second}>
                <p>Contact Details</p>
            </div>
            <div className={model.third}>
                <p>Address: 3548 Columbia Mine Road, Wheeling, West Virginia, 26003 Contact : 304-559-3023 E-mail : shopnow@store.com contact@top.com</p>
            </div>
        </div>
      </div>
      <div className={model.secondclass}>
        <p>Copyright | Th Shop Mania | Developed by ThemeHunk</p>
      </div>
    </div>
  )
}

export default Footer
