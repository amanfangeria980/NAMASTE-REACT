import { useState } from "react";
const Profile=(props)=>{
    const [count]=useState(22); 
    return(
        <div>
            <h1>Profile</h1>
            <h2>name: {props.name}</h2>
            <h3>Count: {count}</h3>

        </div>
    )
}
export default Profile;