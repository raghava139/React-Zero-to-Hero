import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "./Utils/constants";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import UserTestContext from "./Utils/UserTestContext";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Header = () => {
  
  const cartItems = useSelector((store) => store?.cart?.items);
  const [btnName, setBtnName] = useState('LOGIN');
  // useEffect(()=>{
  //   console.log('inside-useEffect')
  //   console.log('-----------------')
  //   return()=>{
  //     console.log('ok')
  //   }
  // },[btnName])
  const onlinseStatus = useOnlineStatus();

  const { DefaultUserInfo } = useContext(UserTestContext);
  console.log('user-->', DefaultUserInfo);

  //Subscribing the store using a selector;

  // console.log('cart', cartItems)
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
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ( {cartItems?.length} items )</Link></li>
          <button type="button" className="login"
            onClick={() => {
              btnName === "LOGIN" ? setBtnName('LOGOUT') : setBtnName('LOGIN')
            }}>{btnName}</button>
          <li className="px-4">{DefaultUserInfo}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;