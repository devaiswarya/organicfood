import React, { useState } from 'react'
import form from './Loginform.module.css'
const Loginform = () => {

    const [name,setname] = useState('')
    const [pass,setpass] = useState('')
    const [message,setmessage] = useState('')
    const [error,seterror] = useState([])

    const validate = () => {
        const newError = {}
      
        if(!name.trim()){
            console.log("Username is required")
            newError.name = "Username is required"
        }
        else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(name)){
            console.log("Invalid username")
            newError.name = "Invalid username"
        }
        if(!pass.trim()){
            console.log("Password is required")
            newError.pass = "Password is required"
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass)){
            console.log("Invalid password")
            newError.pass = "Invalid password"
        }
       seterror(newError)
       
       return Object.keys(newError).length === 0
    }

    const handlesubmit = async() => {
        if(validate()){
            setmessage("login successfully")
            console.log("login successfully")
        }
        else{
            setmessage('')
        }
    }
  return (
    <div className={form.wholeclass}>
        { message && <p className={form.msg}>{message}</p> }
        <div className={form.firstclass}>
            <div className={form.infirst}>
                <p className={form.f1}>Login</p>
            </div>
            <div className={form.details}>
                <input type="text" placeholder='Username or email address' value={name} onChange={(e) => setname(e.target.value)}/>
                {error.name ? <p className={form.err}>{error.name}</p> : ''}
                <input type="password"  placeholder='Password' value={pass} onChange={(e) => setpass(e.target.value)}/>
                {error.pass ? <p className={form.err}>{error.pass}</p> : ''}
                <div className={form.but}>
                <button onClick={handlesubmit}>Log in </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginform