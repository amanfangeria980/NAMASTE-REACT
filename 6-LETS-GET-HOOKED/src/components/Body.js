import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

// What is state and why
// What is hook? and why
// What is useState? and why  


const Body = () => {
    // const searchText="KFC";
    // We will do this using useState hook
    // searchText is a local state variable
    // KFC is the default value being passed to that variable 
    const [searchInput,setSearchInput]=useState("KFC"); //To create state variables  
  return (
    <>
    <div className="search-container">
        {/* <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>searchInput=e.target.value}/> */}
        {/* will not work or change the text, reason up there */}

        {/* Instead, we will do this */}
        <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        <button className="search-btn">Search</button>
    </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
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
