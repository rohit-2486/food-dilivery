import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
  constructor (props){
    super(props);
  }

  componentDidMount(){
   
  }

  render(){


    return  (
           <div>
              <h1>this is about page</h1>
              <h2>this is namaste react</h2>
              {/* <User name={"Rohit kumar function()"}/> */}
              <UserClass name ={"Rohit kumar class"} location= {"banglore"} />
          </div>
        )
      
  }
}
 
export default About;