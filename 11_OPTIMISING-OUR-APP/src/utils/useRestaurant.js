// Let's create our own hook

import { useState,useEffect } from "react";

const useRestaurant=(resId)=>{
    // Create state variable
    const [restaurant,setRestaurant]=useState(null);
    // We are using useEffect because everytime param changes, we have to re-render the whole component and display new data.
    useEffect(() => {
      getRestaurantInfo();
    }, []);


    async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resId
        );
        const json = await data.json();
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setRestaurant(json.data);
      }
    return restaurant;
};

export default useRestaurant;