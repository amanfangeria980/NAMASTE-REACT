import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useMenu from "../utils/useMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu=useMenu(resId);
  console.log(menu)
  return !menu ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {menu?.cards[0]?.card?.card?.info?.id} </h1>
        <h2>{menu?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL + menu?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="restaurantImage"
        />
        <h3>{menu?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{menu?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{menu?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
