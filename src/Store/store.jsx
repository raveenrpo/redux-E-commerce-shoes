// store.js
import { configureStore } from "@reduxjs/toolkit";
// import shopReducer from "./shopSlice/";
import shopReducer from "../ShopSlice/shopeSlice";
const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default store;
