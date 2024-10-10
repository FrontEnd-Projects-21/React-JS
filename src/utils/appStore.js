import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice"; // Import the reducer from cardSlice

const appStore = configureStore({
  reducer: {
    cart: cardReducer, // Add your cart reducer here
  },
});

export default appStore;
