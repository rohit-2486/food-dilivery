import React from "react";
import Shimmer from "shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

  const {resId} = useParams();

   const resInfo = useRestaurantMenu(resId);

    if (resInfo===null) {   return <Shimmer />;   }

    const {name , cuisines , costForTwo} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;


    return  (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")} - {costForTwo}</p>
            <h2>menu</h2>
      
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.price/100} </li>
                ))}
            
            </ul>
        </div>
    )
}
export default  RestaurantMenu; 