import React from 'react';
 
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {resList}=props;

  const {
   cloudinaryImageId,
   // imageGridCards,
   name,
   cuisines,
   avgRating,
   costForTwo,
   deliveryTime
  } =  resList?.info;

   return (
      <div className="res-card">
         <img className="res-logo" 
         src={CDN_URL + cloudinaryImageId}
         alt="food-photo "/>
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>cost For two {costForTwo/100} </h4>
         <h4>divilery {deliveryTime} minutes </h4>

      </div>

   );
};

export default RestaurantCard;