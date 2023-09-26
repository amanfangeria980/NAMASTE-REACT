import { useState } from "react";

logo_src = require("../../assets/logo.png");


const Title = () => (
  <a href="/">
    <img className="logo" src={logo_src} alt="logo" />
  </a>
);

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
