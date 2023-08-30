import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <>
    <div className="search-container">
        
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
