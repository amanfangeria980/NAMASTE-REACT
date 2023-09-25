import { useState,useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput,restaurants){
  const data=restaurantList.filter((restaurant)=>restaurant.info.name.includes(searchInput));
  return data;
}



const Body = () => {
    const [searchInput,setSearchInput]=useState("");
    const [restaurants, setRestaurants]=useState(restaurantList);

    // Using useEffect
    useEffect(()=>{

    })
    // the callback func inside useEffect will not be called immediately, it will be called when useEffect wants it to be called and react will make sure, it will be called at a specific time.

  return (
    <>


    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>

        <button className="search-btn" onClick={()=>{
          const data=filterData(searchInput,restaurants);
          setRestaurants(data);
        }}>Search</button>

    </div>


      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.info}
              key={restaurant.info.id.toString()}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;




// Components re renders after every state change and prop changes.