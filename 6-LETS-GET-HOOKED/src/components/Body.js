import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";



const Body = () => {
    let searchTxt="KFC";
    // React follows one-way data binding.

    // The value doesn't change as react doesn't use local variable when we want to maintain a variable, we have to use some react variable or kind of a state variable.

    // Every Component in react maintains a state, so we can put some variables on to that state and everytime we have to create some local variable, we can use state in it.
    
    // We will do this using useState hook
    const [searchText]=useState();  
  return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e)=>searchText=e.target.value}/>
        {/* will not work or change the text, reason up there */}
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
