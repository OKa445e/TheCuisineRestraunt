import React from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const online = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg mx-4 ">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} />
      </div>
      <div className="flex item-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-2xl">Online : {online ? "✅" : "❌"}</li>
          <li className="px-4 text-2xl hover:text-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-2xl hover:text-gray-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-2xl hover:text-gray-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-2xl hover:text-gray-500">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
