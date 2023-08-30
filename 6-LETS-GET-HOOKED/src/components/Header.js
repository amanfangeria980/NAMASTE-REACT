logo_src = require("../../assets/logo.png");

export const Title = () => (
    <a href="/">
      <img className="logo" src={logo_src} alt="logo" />
    </a>
);


const Header = () => (
  <div className="header">
    <Title></Title>
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

// To use this in our App.js file, we have to first import this module there and then, export this module here, there are two ways of exporting this:
// 1. Exporting by default (To import use this: import Header from "./components/Header" )->This is known as default import
export default Header;
// 2.Export by name or, Exporting multiple things from a file -> Export directly for example, see the Title component->exporting a constant variable title (To import use this: import {Title} from "./components/Header" )->we are extract this from our header file-> This is known as named import

