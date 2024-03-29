import { useState } from "react";
import Logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"
const Title = () => (
  <Link href="/">
    <img className="h-28 p-2" src={Logo} alt="logo" />
  </Link>
);


const title = "Good Taste";

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const isOnline=useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <h1 className="py-10">{title}</h1>
      <div className="nav-items">
        <ul className="flex py-10" >
          <Link to="/"><li className="px-2">Home</li></Link>
          <Link to="/about"><li className="px-2">About</li></Link>
          <Link to="/contact"><li className="px-2">Contact</li></Link>
          <Link to="/cart"><li className="px-2">Cart</li></Link>
          <Link to="/instamart"><li className="px-2">Instamart</li></Link>
        </ul>
      </div>
      <h1 className="py-10">{isOnline ? "🟢" : "🔴" }</h1>
      {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
  );
};

export default Header;
