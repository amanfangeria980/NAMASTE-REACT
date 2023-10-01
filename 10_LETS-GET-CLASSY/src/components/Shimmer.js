import React from 'react'

const Shimmer = () => {
  return (
    // <h1>Shimmer UI Loading...</h1>
    <div className="restaurant-list">
      {Array(18).fill("").map((e,index)=>{
        return(
          <div className='shimmer-card' key={index.toString()}></div>
        )
      })}
    </div>
  )
}


export default Shimmer