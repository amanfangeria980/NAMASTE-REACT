import { useEffect } from "react";
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
  const {resId}=useParams();
  

  async function getRestaurantInfo(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=344841&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    console.log(json);
  }

  useEffect(()=>{
    getRestaurantInfo();
  },[])

  return (
    <div>
        <h1>Restaurant id : {resId} </h1>
        <h2>Namaste</h2>
    </div>
  )
}

export default RestaurantMenu