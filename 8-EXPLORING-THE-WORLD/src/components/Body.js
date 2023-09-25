import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput,restaurants){
  const data=restaurantList.filter((restaurant)=>restaurant.info.name.includes(searchInput));
  return data;
}



const Body = () => {
  // we should not fetch or call an api here as, on every small change or key press, this component will keep on re-rendering.
  /* 
  We can do 2 things:
  1.) Page loads->api call(200 ms)->render page(150 ms)=> 350ms
  2.) Page loads->render something initially(100 ms) -> api call(200ms) -> update UI

  Obviously, 2nd approach is the better one.

  It means that we will first render something initially and then keep updating the UI.
  
  For this, react has given us a functionality -> useEffect() Hook

  */
    const [searchInput,setSearchInput]=useState("");
    const [restaurants, setRestaurants]=useState(restaurantList);
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




