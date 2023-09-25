import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'

function filterData(searchInput,restaurants){
  const data=restaurantList.filter((restaurant)=>restaurant.info.name.includes(searchInput));
  return data;
}



const Body = () => {
    const [searchInput,setSearchInput]=useState("");
    const [restaurants, setRestaurants]=useState([]);

    useEffect(()=>{
      getRestaurants();
    },[])

    async function getRestaurants(){
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      console.log(json);
      // optional chaining to prevent error
      setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      // Implement Shimmer UI 
    }
    
    // Conditional Rendering
    // E.g.,
    // if restaurant is empty -> shimmer UI 
    // if restaurant has data -> actual data UI 
    // We have done it below using ternary operator 

  return (restaurants.length===0) ? <Shimmer/> : (
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
