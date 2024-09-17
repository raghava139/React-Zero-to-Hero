import { useEffect, useState } from "react";
import { LOGO_URL } from "./Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Header = () => {

  const [btnName, setBtnName] = useState('LOGIN');
  // useEffect(()=>{
  //   console.log('inside-useEffect')
  //   console.log('-----------------')
  //   return()=>{
  //     console.log('ok')
  //   }
  // },[btnName])
  const onlinseStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Onlinse Status: {onlinseStatus == false?"🔴":"🟢"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <li>Cart</li>
          <button type="button" className="login"
            onClick={() => {
              btnName === "LOGIN" ? setBtnName('LOGOUT') : setBtnName('LOGIN')
            }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header;