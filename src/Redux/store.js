import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Reducers/ProductsSlice";
import cartReducer from "./Reducers/cartSlice"

export default configureStore({
  reducer: {
    productsData: ProductsReducer,
    cart: cartReducer,
  },
});
