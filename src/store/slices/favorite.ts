import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps } from "../../models/components";

interface FavoritesState {
  favorites: ItemProps[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ItemProps>) => {
      const item = action.payload;
      state.favorites.push(item);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
