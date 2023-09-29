import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+resId
    );
    const json = await data.json();
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    setMenu(json.data);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

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
