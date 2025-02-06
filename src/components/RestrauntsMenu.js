import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import "../../index.css";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestrauntsMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);
  const [searchVal, SetsearchVal] = useState(""); 
  const [showIndex,setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;


  const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  const catgories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>
        <h3 className="text-xl text-gray-600">{costForTwoMessage}</h3>
        <h3 className="text-lg text-gray-500 mt-2">{cuisines.join(" , ")}</h3>
      </div>

      {catgories.map((category, index) => (
        // controlled component
        <RestrauntCategory
        key={category?.card?.card.title}
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestrauntsMenu;
