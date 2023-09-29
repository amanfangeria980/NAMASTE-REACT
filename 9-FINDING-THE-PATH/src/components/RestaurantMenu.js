import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
  const params=useParams();
  console.log(params)
  return (
    <div>
        <h1>Restaurant id : 123</h1>
        <h2>Namaste</h2>
    </div>
  )
}

export default RestaurantMenu