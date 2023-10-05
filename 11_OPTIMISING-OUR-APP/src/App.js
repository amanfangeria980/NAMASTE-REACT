import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu"
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand loading
// Dynamic Import

// This is a promise
const Instamart=lazy(()=>import("./components/Instamart"));
// Upon on demand loading -> upon render -> suspend loading 


const AppLayout = () => (
  <>
    <Header />
    <Outlet/>
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path: "profile",
            element: <Profile name={"Aman"}/>
          },
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
