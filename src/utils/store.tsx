import { useSelector } from "react-redux";
import { ItemProps } from "../models/components";
import { RootState } from "../store/store";

const useStore = () => {
  const favorites: ItemProps[] = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = (favoriteId: ItemProps) => {
    return favorites.some(
      (favorite: ItemProps) => favorite.id === favoriteId.id
    );
  };

  const carts: ItemProps[] = useSelector((state: RootState) => state.cart.cart);
  const isCart = (cartId: ItemProps) => {
    return carts.some((cart: ItemProps) => cart.id === cartId.id);
  };

  const tickets: ItemProps[] = useSelector(
    (state: RootState) => state.tickets.tickets
  );

  const isTickets = (favoriteId: ItemProps): boolean => {
    return tickets.some((favorite: ItemProps) => favorite.id === favoriteId.id);
  };

  return { favorites, isFavorite, carts, isCart, tickets, isTickets };
};

export default useStore;
