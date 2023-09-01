import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    // useState hook returns an array, first is variable and second is function to update the variable
    // Here it is using two way binding
    const [searchInput,setSearchInput]=useState("KFC");
    const [searchClicked,setSearchClicked]=useState("false");
  return (
    <>


    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
        <h1>{searchClicked}</h1>
        <button className="search-btn" onClick={()=>{
          if(searchClicked==="true")setSearchClicked("false");
          else setSearchClicked("true");
        }}>Search</button>
        {/* Here on click, our heading comonent is getting re rendered */}
        {/* we don't need to add the event as we are changing the value ourselves, when we need any human interaction information or details, then only we use event or e */}
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
