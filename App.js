import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src= "https://marketplace.canva.com/EAGHzuEFphw/1/0/1600w/canva-black-and-white-minimalist-circle-restaurant-food-logo-W6O-O70WDwA.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>       
                </ul>
            </div>
        </div>
    );
};

const RestrauntCard = () => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
       <img className="res-logo"
       alt = "res-logo"
       src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ujxchwpnoi2djlrcx3uz" />       
        <h3>Punjabi Dhaba</h3>
        <h4>Palak Panner, North Indian, Asia</h4>
        <h4>4.5 stars</h4>
        <h4>30 minutes</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
