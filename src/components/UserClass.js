import React from "react";

class UserClass  extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name:"Dummy",
                location: "default",
            },
             
        }

    }

   async componentDidMount(){
        const data = await fetch ("https://api.github.com/users/rohit-2486");
        const json =  await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json)
    }

    render(){
        const{name , location  , avatar_url} =  this.state.userInfo;

    return(

        <div className="user-card">
            <img className="My-img" src={avatar_url}/>
              <h2>name: { name}</h2>
            <h3>phone - 6205529652</h3>
            <h3>location:{location}</h3>
            <p>email id : rohitkumarrj@gmail.com</p>

        </div>
    )
}}
export default UserClass;