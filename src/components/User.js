import React from "react";
import { useState } from "react";
const User = ({name}) =>{
    const [count,setcount] = useState(0);
    // const [count1] = useState(1);
    return (
        <div className="user-card">
            <h2>Count:{count}</h2>
            <button onClick={()=>{
                setcount(count+1)
            }}
            >
                Increase count
            </button>

            {/* <h2>Count1:{count1}</h2> */}
            <h2>name:{name}</h2>
            <h3>phone - 6205529652</h3>
            <h3>location: Banglore</h3>
            <p>email id : rohitkumarrj@gmail.com</p>

        </div>
    )
}
export default User;