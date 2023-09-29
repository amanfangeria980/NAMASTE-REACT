import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
  const {resId}=useParams();
  return (
    <div>
        <h1>Restaurant id : {resId} </h1>
        <h2>Namaste</h2>
    </div>
  )
}

export default RestaurantMenu