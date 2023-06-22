import { configureStore, Store } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import favoritesReducer from "./slices/favorite";
import ticketsReducer from "./slices/tickets";

const store: Store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    tickets: ticketsReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
