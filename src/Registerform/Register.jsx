import React, { useState } from 'react'
import hello from './Register.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [name ,setname] = useState('')
    const [email,setemail] = useState('')
    const [number,setnumber] = useState('')
    const [password,setpassword] = useState('')
    const [confirm ,setconfirm] = useState('')
    const [error,seterror] = useState([])
    // const [message,setmessage] = useState('')

    const validate = () => {
        const newError = {}

        if (!name.trim()){
            console.log("username is required")
            newError.name = "username is required"
        }
        if (!email.trim()){
            console.log("Email address is required")
            newError.email="Email Address is required"
        }
        else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
            console.log("Enter the valid email Address")
        }
        if(!number.trim()){
            console.log("phone number is required")
            newError.number="phone number is requird"
        }
        else if(!/^[6-9]\d{9}$/.test(number)){
            console.log("Enter the correct phone number")
            newError.number="Enter the correct phone number"
        }
        if(!password.trim()){
            console.log("password is required")
            newError.password="password is required"
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            console.log("Enter the correct password")
            newError.password="Enter the correct password"
        }
        if(!confirm.trim()){
            console.log("confirm password is required")
            newError.confirm="confirm password is required"
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(confirm)){
            console.log("Enter the correct confirm password")
            newError.confirm="Enter the correct confirm password"
        }
        seterror(newError)

        return Object.keys(newError).length === 0
    }

    const handlesubmit = async(e) => {
        e.preventDefault();

        if (!validate()){
            return ;
        }
        console.log("Register Successfully")
        // setmessage("Register Successfully")
        const newData = {
            name:name,
            email:email,
            number:number,
            password:password,
            confirm:confirm
        }
        try{
            const res = await axios.post(`https://backend-apqk.onrender.com/api/user/created`,newData)
            console.log(res.data)
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className={hello.wholeclass}>
      <div className={hello.firstclass}>
        <div className={hello.infirst}>
            <p className={hello.f1}>Registration Form</p>
        </div>
        <div className={hello.details}>
            <input type="text" placeholder='Enter the username' value={name} onChange={(e) => setname(e.target.value)}/>
            {error.name ? <p>{error.name}</p> : ""}
            <input type="text" placeholder='Enter the emailAddress' value={email} onChange={(e)=>setemail(e.target.value)}/>
            {error.email ? <p>{error.email}</p>:""}
            <input type="text" placeholder='Enter the phonenumber' value={number} onChange={(e) => setnumber(e.target.value)}/>
            {error.number ? <p>{error.number}</p> : ''}
            <input type="text" placeholder='Enter the password' value={password} onChange={(e) => setpassword(e.target.value)}/>
            {error.password ? <p>{error.password}</p> :''}
            <input type="text" placeholder='Enter the confirm password' value={confirm} onChange={(e) => setconfirm(e.target.value)}/>
            {error.confirm ? <p>{error.confirm}</p> : ''}
            <div className={hello.but}>
                <button onClick={handlesubmit}>Register</button>
            </div>
            <p className={hello.nice}>After complete the registration you <Link to={'/login'}>Login Here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
