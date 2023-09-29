import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
  // const params=useParams();
  // const {id}=params
  // console.log(params);
  const {id}=useParams();
  return (
    <div>
        <h1>Restaurant id : {id} </h1>
        <h2>Namaste</h2>
    </div>
  )
}

export default RestaurantMenu