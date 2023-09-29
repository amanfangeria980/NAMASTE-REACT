import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
  const {resId}=useParams();
  const [menu, setMenu] = useState()

  async function getRestaurantInfo(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=344841&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    // console.log(json.data.cards[0].card.card.info.id);
    setMenu(json.data);
  }

  useEffect(()=>{
    getRestaurantInfo();
  },[])

  return (
    <div>
        <h1>Restaurant id : {menu?.cards[0]?.card?.card?.info?.id} </h1>
        <h2>{menu?.cards[0]?.card?.card?.info?.name}</h2>
        <img src={IMG_CDN_URL+menu?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="restaurantImage" />
    </div>
  )
}

export default RestaurantMenu