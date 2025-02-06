import React from "react";
import "../../index.css"
class UserClass extends React.Component {
    constructor(props){
        // console.log("child constructor");
        
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Oka445e");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
        
    }

   render() {

    // console.log("child render");
    const {location,name,avatar_url} = this.state.userInfo;
    // const safeLocation = location ? location : "Not Available";
    return(
    <div className="user-data">
        <h3>Name: {name}</h3>
        <h4>Location:{location ? location : "null"}</h4>
        <img src = {avatar_url} />
    </div>
    );
   };
};

export default UserClass;