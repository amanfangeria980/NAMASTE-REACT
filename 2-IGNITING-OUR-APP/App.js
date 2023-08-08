/* 
WHAT PARCEL IS DOING?
Hot module reload - HMR
File Watcher algorithm - C++
BUNDLING
{npx build parcel index.html for prod build, remove entrypoint from package.json as we have to pass it in the command line itself in parcel}
MINIFY
Cleaning our code
Dev and Production Build
Super fast build algorithm
Image Optimization
Caching while development
Compression
Compatible with older versions of browser
HTTPS on dev
Manages port numbers


*/


import React from "react";
import ReactDOM from "react-dom/client";

const heading1=React.createElement("h1",{
    id:"heading-tag",
},"Hello React!");

const heading2=React.createElement("h2",{
    id:"title",
},"Heading 2")

const container=React.createElement("div",{
    id: "container",
    style: {
        backgroundColor: "red"
    },
},[heading1,heading2]);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(container);