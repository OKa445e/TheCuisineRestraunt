import { useDispatch } from "react-redux";
import { useState } from "react"; 
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const handleAddItem = (item) => {
    dispatch(addItem(item));

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div>
      {showAlert && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 text-sm font-semibold z-50 opacity-100 transition-opacity duration-1000 ease-in-out">
          Item added to cart!
        </div>
      )}

      {items?.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex items-center justify-between"
          >
            <div className="w-9/12">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
            </div>

            <div className="w-3/12 relative">
              <button
                className="absolute right-0 p-1 px-3 rounded-lg bg-black text-white shadow-md text-xs cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>

              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-32 h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
