import { useState } from "react";
import Logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";

const Title = () => (
  <Link href="/">
    <img className="logo" src={Logo} alt="logo" />
  </Link>
);
// We are building a SPA - single page application

// 2 types of routing - client side and server side  => we are using client side routing here to make the pages render without reloading the whole page

const title = "Good Taste";

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};

export default Header;
