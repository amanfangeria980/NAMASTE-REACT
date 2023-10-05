import { useState } from "react";
import Logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"
const Title = () => (
  <Link href="/">
    <img className="logo" src={Logo} alt="logo" />
  </Link>
);


const title = "Good Taste";

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const isOnline=useOnline();
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          <Link to="/instamart"><li>Instamart</li></Link>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴" }</h1>
      {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};

export default Header;
