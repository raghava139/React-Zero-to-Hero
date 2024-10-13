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
    <div className="flex justify-between pink bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Onlinse Status: {onlinseStatus == false ? "🔴" : "🟢"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
          <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
          <li className="px-4">Cart</li>
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