import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-orange-300 font-bold rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-bold">
            Your cart is Empty Please Add Items to the Cart !!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
