import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Shopping Cart
        </h1>

        <div className="flex justify-end mb-4">
          <button
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <h2 className="text-xl text-center text-gray-600">
            Your cart is empty
          </h2>
        ) : (
          <div className="mb-6">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
