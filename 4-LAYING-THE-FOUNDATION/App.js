import React from "react";
import { createElement } from "react";
// import { createElement as ce } from "react";

import ReactDOM from "react-dom/client";
// React.createElement => Object => HTMl DOM

/* <div class="header">
    <h1>Namaste React</h1>
    <ul>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Call Us</li>
    </ul>
</div> */

//We will not write this from now on, instead we will use JSX

const container = createElement(
  "div",
  {
    className: "header",
  },
  [
    createElement("h1", {}, "Namaste React"),
    createElement("ul", {}, [
      createElement("li", {}, "About Us"),
      createElement("li", {}, "Contact Us"),
      createElement("li", {}, "Call Us"),
    ]),
  ]
);

// Writing html dom like this is a pain,so that's why we are gonna use JSX, for example

// This is executed using babel : creates ABS (abstract syntax tree) it's different from ESTree 
//This is a JSX expression
const heading2 = (
  <h1 id="title" key="101" tabIndex="1" className="heading1">
    Aman Fangeria
  </h1>
);

// JSX => React.createElement => HTML(DOM) 
// There are lots of benefits of JSX => readability, less code, etc...

// JSX is not html inside js instead, it is html like something or fancy way of writing html inside js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
