import React, { useContext, useState } from 'react'
import out from '../Checkoutpage/Checkoutpage.module.css'
import CartContext from '../Cart/CartContext';


const Checkoutpage = () => {

  const {cartItems} = useContext(CartContext);

  console.log(cartItems);
   
  const [showcupon,setshowcoupon] = useState(false);
  const [coupon,setCoupon] = useState("");
  const [discount,setdiscount] = useState(0);
  const [error,seterror] = useState("");
  
  const [orderplaced,setorderplaced] = useState(false);
  
  const [names,setnames] = useState('');
  const [mail,setmail] = useState('');
  const [phone,setphone] = useState('');
  const [Street,setstreet] = useState('')
  const [place ,setplace] = useState('');
  const [pin,setpin] = useState('')
  const [paymenttype,setpaymenttype] = useState('');
  const [message,setmessage] = useState([])
  
  const placeorder = () => {
    const newError = {}

    if(!names.trim()){
      newError.names='enter the fullname';
    }
    if(!mail.trim()){
      newError.mail = 'enter the mail';
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
      newError.mail="Enter the corret mail";
    }
    if(!phone.trim()){
      newError.phone= " enter the phonenumber";
    }
    else if(!/^[6-9]\d{9}$/.test(phone)){
      newError.phone= " enter the correct number";
    }
    if(!Street.trim()){
      newError.Street = "enter the street Name"
    }
    if(!place.trim()){
      newError.place="enter the place";
    }
    if(!paymenttype.trim()){
      newError.paymenttype = "choose the payment type";
    }
    if(!pin.trim()){
      newError.pin = "enter the pin code";
    }
    else if(!/^[1-9][0-9]{5}$/.test(pin)){
      newError.pin= 'enter the correct pin code';
    }
    setmessage(newError)
    
    return Object.keys(newError).length === 0;

  }

  const order = () =>{
    if(placeorder()){
      setorderplaced(true);
    }
  }
  
  const handleclick = () =>{
    setshowcoupon(true);
  }

   const totalAmount = cartItems.reduce((sum, item) => {
    const price = parseFloat(
      (item.offerprice || item.fixedprice || item.originalprice || "0").replace('$', '')
    );
    return sum + price * item.quantity;
  }, 0);


  const handleApply = () => {
    if (totalAmount < 100) {
    seterror("Cart amount is too low for discount");
    setdiscount(0);
    return;
  }
    if(!coupon.trim()){
      seterror("Enter the coupon code")
    }

    if(coupon === "SAVE10"){
      setdiscount(100);
      seterror("");
    }
    else{
      seterror("Invalid coupon");
      setdiscount(0);
    }
  }
  const total = totalAmount - discount;

  return (
    <div className={out.wholeclass}>
      {!orderplaced ? (
        <div className={out.join}>
          <div className={out.firstclass}>
        <div className={out.firstchild}>
          <p>Checkout</p>
        </div>
        </div>
        <div className={out.cut}>
          <div className={out.inchilds}>    
                <input type="text" placeholder='Full Name' value={names} onChange={(e) => setnames(e.target.value)}/>
               {message.names ? <p className={out.mute}>{message.names}</p> : ''}
                <input type="text" placeholder='Email Address' value={mail} onChange={(e) => setmail(e.target.value)}/>
               {message.mail ? <p className={out.mute}>{message.mail}</p> : ''}
                <input type="text" placeholder='Phone Number' value={phone} onChange={(e) => setphone(e.target.value)}/>
                {message.phone ? <p className={out.mute}>{message.phone}</p> : ''}
                <input type="text" placeholder='Street Name' value={Street} onChange={(e) => setstreet(e.target.value)}/>
               {message.Street ? <p className={out.mute}>{message.Street}</p> : ''}
                <input type="text" placeholder='Place' value={place} onChange={(e) => setplace(e.target.value)}/>
              {message.place ? <p className={out.mute}>{message.place}</p> : ''}
                <input type="text" placeholder='Pin Code' value={pin} onChange={(e) => setpin(e.target.value)}/> 
           {message.pin ? <p className={out.mute}>{message.pin}</p> : ''}
           <select value={paymenttype} onChange={(e) => setpaymenttype(e.target.value)}>
            <option >select payment type</option>
            <option >Cash on delivery</option>
            <option >online payment</option>
           </select>
           {message.paymenttype ? <p className={out.mute}>{message.paymenttype}</p> : ''}
                 <div className={out.firstclasses}>
        <div className={out.inchild}>
        <p className={out.clicks}>Have a coupon?</p>
        <span className={out.click} onClick={handleclick}>Click here to enter your code</span>
        </div>
          {showcupon && (<div className={out.coupon}>
            <input type="text" placeholder='Coupon code' value={coupon} onChange={(e) => setCoupon(e.target.value)}/>
            {error ? <p className={out.mute}>{error}</p>: ''}
            {discount ? <p className={out.mute}>discount price is:{discount}</p> : ''}
            <p className={out.kind} onClick={handleApply}>Apply coupon</p>
          </div>)}
       </div>
          <p className={out.place} onClick={order}>PLACE ORDER</p>
          </div>
        </div>
          </div>
      ) : (
          <div className={out.sum}>
          <div className={out.small}>
             <p>Order placed Successfully</p>
          </div>
          <div className={out.sing}>
          <div className={out.app}>
           <p>Order Summary</p>
           </div>
           <div className={out.mini}>
            <p>customer name:{names}</p>
            <p>Email:{mail}</p>
            <p>Contact number:{phone}</p>
            <p>Address:{Street}{place}{pin}</p>
            </div>
          </div>
          <div className={out.hint}>
            <p>ordered products:</p>
            </div>
            <div className={out.king}>
              {cartItems.map((item,index)=>(
                <div className={out.fill}>
                  <div className={out.photo}>
                    <img src={item.image} alt="" />
                    </div>
                    <div className={out.section}>
                      <p>product Name:{item.name}</p>
                      <p>product Quantity:{item.quantity}</p>
                      </div>
                  </div>
              ))}
              </div>
              <div className={out.finish}>
              <p>Total Amount:${totalAmount.toFixed(2)}</p>
              {discount ? <p> Your discount Amount is:${total}</p> : ''}
              </div>
          </div>
       )} 
           
  
    
        
       
    </div>
  )};

export default Checkoutpage