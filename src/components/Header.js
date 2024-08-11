import { useState } from "react";
import { LOGO_URL } from "./Utils/constants";

const Header = () => {

  const [btnName, setBtnName] = useState('LOGIN');

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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