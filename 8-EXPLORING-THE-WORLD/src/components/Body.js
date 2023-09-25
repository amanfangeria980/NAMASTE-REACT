import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'

function filterData(searchInput,allRestaurants){
  const data=allRestaurants.filter((restaurant)=>restaurant.info.name.includes(searchInput));
  return data;
}



const Body = () => {
    const [searchInput,setSearchInput]=useState("");
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants]=useState([]);

    async function getRestaurants(){
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      console.log(json);
      // optional chaining to prevent error
      setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(()=>{
      getRestaurants();
    },[])

    // to avoid rendering a component, we can do something like this:- early return
    // if(!allRestaurants)return null;


  return (allRestaurants.length===0) ? <Shimmer/> : (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>

        <button className="search-btn" onClick={()=>{
          const data=filterData(searchInput,allRestaurants);
          setFilteredRestaurants(data);
        }}>Search</button>

    </div>


      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
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
