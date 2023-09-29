import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact"
import Cart from "./components/Cart"

const AppLayout = () => (
  <>
    <Header />
    {/* <About/> if path is /about */}
    {/* if path is / then body */}
    <Body /> 
    <Footer />
  </>
);


const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
