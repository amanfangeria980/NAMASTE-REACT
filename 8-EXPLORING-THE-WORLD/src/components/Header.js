logo_src = require("../../assets/logo.png");

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
  </div>
);

export default Header;
