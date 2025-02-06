import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestraunt, setListofRestraunt] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListofRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div className="text-center py-8 text-xl text-red-600">
        Looks like your internet is disconnected. Please check your connection.
      </div>
    );

  return listOfRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-4 sm:space-y-0">
        {/* Search Section */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filterRestraunt = listOfRestraunt.filter((resName) =>
                resName.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestraunt(filterRestraunt);
            }}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => {
            const filterList = listOfRestraunt.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestraunt(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestraunt.map((restraunt) => (
          <Link
            key={restraunt.info.id}
            to={"/restraunts/" + restraunt.info.id}
            className="block"
          >
            <RestrauntCard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
