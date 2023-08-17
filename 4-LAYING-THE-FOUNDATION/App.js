// import React from "react";
// import { createElement } from "react";
// import { createElement as ce } from "react";

import ReactDOM from "react-dom/client";
// React.createElement => Object => HTML DOM

/* <div class="header">
    <h1>Namaste React</h1>
    <ul>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Call Us</li>
    </ul>
</div> */

//We will not write this from now on, instead we will use JSX

// const container = createElement(
//   "div",
//   {
//     className: "header",
//   },
//   [
//     createElement("h1", {}, "Namaste React"),
//     createElement("ul", {}, [
//       createElement("li", {}, "About Us"),
//       createElement("li", {}, "Contact Us"),
//       createElement("li", {}, "Call Us"),
//     ]),
//   ]
// );

// Writing html dom like this is a pain,so that's why we are gonna use JSX, for example

// This is executed using babel : creates ABS (abstract syntax tree) it's different from ESTree 
//This is a JSX expression or  a react element, it is just an object
const heading2 = (
  <h1 id="title" key="101" tabIndex="1" className="heading1">
    Aman Fangeria
  </h1>
);


// JSX => React.createElement => HTML(DOM) 
// There are lots of benefits of JSX => readability, less code, safe etc...

// JSX is not html inside js instead, it is html like something or fancy way of writing html inside js


//React Component:
// 1. Class Based Component - OLD
// 2. Functional Component - NEW

//A functional component is nothing but a js function which returns some jsx or html or component itself
//Name of components starts with a capital letter by convention, for example here is a react component (this is just a function that's returning jsx or some html)
const HeaderComponent=()=>{
    return (
        <div>
            {heading2}
            <ParaComponent />
            {console.log("hello")}
            <h1>Namaste</h1>
            <h2>React!</h2>
        </div>
    )
}

//This is also same, we don't have to write return here, we can also use normal function
// const HeaderComponent2=()=>(
//         <div>
//             <h1>Namaste</h1>
//             <h2>React!</h2>
//         </div>
// )

//Now, how to use my react element inside component
// just put it in curly braces inside the component as in line number 60


const ParaComponent=()=>(
<p>I am learning react.</p>
) //Components don't need to have order or hoisting doesn't work normally in components
//Now, how to use an exisiting component inside a component or it is called component composition
//just use it as a tag for example in line number 61 or like {ParaComponent()};

//If we want to write any normal javascript thing inside out functional component, just embed it under curly braces and use it as in line 62

// Sanitization is done by JSX to ensure the javascript to be executed inside a component is safe

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2); //Rendering a react element
root.render(<HeaderComponent />); //Rendering a react component
