import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import userContext from "../utils/userContext";

const RestrauntCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(userContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs w-full">
      <img
        className="w-full h-48 object-cover rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>
      <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-sm text-yellow-500 mt-1">⭐ {avgRating}</h4>
      <h4 className="text-sm text-gray-700">{costForTwo}</h4>
      <h4 className="text-sm text-gray-500">{sla.slaString}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export default RestrauntCard;
