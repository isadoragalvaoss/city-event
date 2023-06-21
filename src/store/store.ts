import { configureStore, Store } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorite";

const store: Store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
