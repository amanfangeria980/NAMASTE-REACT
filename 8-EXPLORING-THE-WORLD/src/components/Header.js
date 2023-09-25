logo_src = require("../../assets/logo.png");

function loggedInUser(){
  // Some method
  // return true;
  return false;
}


const Title = () => (
    <a href="/">
      <img className="logo" src={logo_src} alt="logo" />
    </a>
);


const title="Good Taste";

const Header = () => (
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
    { loggedInUser() ? <button>Logout</button>: <button>Login</button> }
  </div>
);

export default Header;
