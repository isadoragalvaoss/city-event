import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps } from "../../models/components";

interface TicketsState {
  tickets: ItemProps[];
}

const initialState: TicketsState = {
  tickets: [],
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<ItemProps>) => {
      const item = action.payload;
      state.tickets.push(item);
    },
    removeTicket: (state, action: PayloadAction<string>) => {
      state.tickets = state.tickets.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const { addTicket, removeTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
