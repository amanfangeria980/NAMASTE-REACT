import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating,user}) => {
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="card1" />
        <h2 className="text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{user.name}</h4>
      </div>
    );
  };

  export default RestaurantCard;