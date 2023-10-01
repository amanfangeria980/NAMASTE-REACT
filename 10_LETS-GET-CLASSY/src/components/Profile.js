import { useEffect, useState } from "react";
const Profile=(props)=>{
    const [count]=useState(22);
    useEffect(()=>{
        console.log("UseEffect");
        return()=>{
            console.log("UseEffect Return");
        }
    },[]) 
    console.log("render");

    // So here what will happen is, first the initial page gets rendered, hence render will be printed, then useEffect will be printed, and when we leave that page, UseEffect return will be printed.
    return(
        <div>
            <h1>Profile</h1>
            <h2>name: {props.name}</h2>
            <h3>Count: {count}</h3>

        </div>
    )
}
export default Profile;