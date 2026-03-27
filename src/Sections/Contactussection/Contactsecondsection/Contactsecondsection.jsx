import React, { useState } from 'react'
import changes from './Contactsecondsection.module.css'
const Contactsecondsection = () => {

    const [username,setusername] = useState('')
    const [email ,setemail] = useState('')
    const [number,setnumber] = useState('')
    const [content,setcontent] = useState('')
    const [errors,seterrors] = useState([])
    const [msg,setmsg] = useState('')

    const validateform = () => {
      const newErrors = {}

      if(!username.trim()){
        newErrors.username = "Please fill this field"
      }
      if(!email.trim()){
        newErrors.email = "Please fill this field"
      }
      else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
        newErrors.email = "Enter the correct email"
      }
      if(!number.trim()){
        newErrors.number = "Please fill this field"
      }
      if(!content.trim()){
        newErrors.content = "Please fill this field"
      }
      seterrors(newErrors)

      return Object.keys(newErrors).length === 0
    }

    const handle = () => {
      if(validateform()){
        setmsg("thanks for a message");
      }
      else{
        setmsg('')
      }
    }

  return (
    <div className={changes.mainclass}>
      <div className={changes.firstclass}>
        <div className={changes.firstsub}>
          <p>Leave a Message</p>
        </div>
        <div className={changes.secondsub}>
          <input type="text" placeholder='Name' className={changes.in} value={username} onChange={(e) => setusername(e.target.value)}/>
          {errors.username ? <p className={changes.same}>{errors.username}</p> : ''}
          <input type="gmail" placeholder='Email' className={changes.in} value={email} onChange={(e) => setemail(e.target.value)}/>
          {errors.email ? <p className={changes.same}>{errors.email}</p> : ''}
          <input type="text" placeholder='Contact number' className={changes.in} value={number} onChange={(e) => setnumber(e.target.value)}/>
          {errors.number ? <p className={changes.same}>{errors.number}</p> : ''}
          <textarea rows={9} cols={55} className={changes.text} placeholder='Message' value={content} onChange={(e) => setcontent(e.target.value)}></textarea>
          {errors.content ? <p className={changes.same}>{errors.content}</p> : ''}
          <button className={changes.but} onClick={handle}>Submit</button>
          {msg && <p className={changes.same}>{msg}</p>}
        </div>
      </div>
      <div className={changes.secondclass}>
        <div className={changes.first}>
          <div className={changes.firstcolor}>
            <i class="fa-solid fa-mobile-button"></i>
            </div>
            <div>
              <p className={changes.p3}>Phone: 123-456-7890</p>
              <p className={changes.p2}>Email: abc@gmail.com</p>
            </div>
            </div>
            <div className={changes.first}>
              <div className={changes.firstcolor}>
                 <i class="fa-regular fa-comment-dots"></i>
              </div>
              <div>
                <p className={changes.p1}>Support 24x7</p>
                <p className={changes.p2}>We are always online</p>
              </div>
              </div>
            <div className={changes.first}>
              <div className={changes.firstcolor}>
                 <i class="fa-regular fa-alarm-clock"></i>
              </div>
              <div>
                <p className={changes.p1}>Shop open timing</p>
                <p className={changes.p2}>9am - 11pm</p>
              </div>
            </div>
            <div className={changes.first}>
              <div className={changes.firstcolor}>
                <i class="fa-solid fa-address-card"></i>
              </div>
              <div>
                <p className={changes.p1}>Address 8770 SE17EB</p>
                <p className={changes.p2}>London, UK</p>
              </div>
            </div>
        <div></div>
      </div>
    </div>
  )
}

export default Contactsecondsection

