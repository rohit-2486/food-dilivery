// import Title from "./Title";

import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import React from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

// let btnName="Login";
const [btnName, setBtnName] =useState("Login");

const onlineStatus= useOnlineStatus();

  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img
        className="w-100" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            OnLine Status: {onlineStatus ? "✅": "❌"};
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
         </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
           className="login" 
           onClick={() => {
            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
            console.log(btnName);
          }}
          >
            {btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;