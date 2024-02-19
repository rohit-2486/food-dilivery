 
import React from 'react';
import RestaurantCard from "./RestrauntCard";
import { useState ,useEffect } from "react";
// import resList from "../utils/mockData";
// import Shimmer from "./Shimmer";
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import { Restaurant_API } from '../utils/constant';



const Body = () => {

  const [ListOfRestaurant , setListOfRestaurant] = useState([]);

  const [filteredRestaurant,setFilteredRestaurant]=useState([]);

  const [searchText , setSearchText] = useState("");

  useEffect( ()=>{
    fetchData();
  },[]
  );

  const fetchData = async() =>{
    const data = await fetch( Restaurant_API );
      const json = await data.json();
      // console.log(json);

//  optional chaining
      setListOfRestaurant(()=> json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(()=> json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus= useOnlineStatus();
    if(onlineStatus=== false) {
      return (
        <h1>
          you are looking offline, please checks the internet connection
        </h1>
      )
    }

    

  return (
     <div className="body">

        <div className="filter">

        <div className="search">
          <input
           type="text" 
           className="search-box"
           value={searchText}
           onChange={(e)=>setSearchText(e.target.value)}
           />
          <button onClick = {() => {

            console.log(searchText);
           const filteredRestaurant= ListOfRestaurant.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);

            //filter the restaurant card and change the ui 
            // searchText
          }}>search</button>
        </div>

          <button 
              className="filter-btn"
           onClick={()=>{
            const filteredList= ListOfRestaurant.filter(
            (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
           }}
           >
            top-rated Restaurant
          </button>
        </div>

        <div className="res-container">
                     
     
       {filteredRestaurant.map((restaurant)=>(
     
       <Link 
         key={restaurant.info.id} 
         to={"/restaurant/"+ restaurant.info.id }>
          <RestaurantCard resList={restaurant}/>
       </Link>
       ))}       

       </div>

     </div>
  );

};

export default Body;


