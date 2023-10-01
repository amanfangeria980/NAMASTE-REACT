import { useEffect, useState } from "react";
const Profile = (props) => {
  const [count] = useState(22);
  useEffect(() => {
    const timer=setInterval(() => {
        console.log("HELLO AMAN");
    }, 1000);
    console.log("UseEffect");
    return () => {
        // This is kind of the unmounting phase
        clearInterval(timer);
      console.log("UseEffect Return");
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h1>Profile</h1>
      <h2>name: {props.name}</h2>
      <h3>Count: {count}</h3>
    </div>
  );
};
export default Profile;
