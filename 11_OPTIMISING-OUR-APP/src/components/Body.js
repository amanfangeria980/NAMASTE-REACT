import {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const allRestaurants=useRestaurant(setFilteredRestaurants);
  
  

  const online=useOnline();
  if(!online){
    return <h1>🔴Offline - please check your internet connection :(</h1>
  }
  
  return !allRestaurants ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length===0 ? (
          <h1>No Restaurants Found :(</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id.toString()}
              >
                <RestaurantCard
                  {...restaurant.info}
                  key={restaurant.info.id.toString()}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
