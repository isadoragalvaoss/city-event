import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal as ModalUI } from "@ui-kitten/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../consts/colors";
import { InfoProps, ItemProps, ModalProps } from "../../models/components";
import { addFavorite, removeFavorite } from "../../store/slices/favorite";
import { RootState } from "../../store/store";
import Button from "../Button";
import {
  StyledActions,
  StyledButtonCart,
  StyledContainer,
  StyledFavoriteIcon,
  StyledImage,
  StyledText,
  StyledTextBold,
  StyledTextContainer,
} from "./Modal.styles";

const Modal: React.FC<ModalProps> = ({ visible, item, setVisible }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const info: InfoProps[] = [
    { name: item.date, icon: "calendar" },
    { name: item.location, icon: "map-marker-outline" },
    { name: item.schedule, icon: "clock-outline" },
    { name: item.price, icon: "cash" },
    { name: item.organizer, icon: "account-group-outline" },
    { name: item.description, icon: "text" },
  ];

  const isFavorite = (favoriteId: ItemProps) => {
    return favorites.some(
      (favorite: ItemProps) => favorite.id === favoriteId.id
    );
  };

  const icon = isFavorite(item) ? "heart" : "heart-outline";

  const handleFavorite = () => {
    isFavorite(item)
      ? dispatch(removeFavorite(item.id))
      : dispatch(addFavorite(item));
  };

  return (
    <ModalUI
      visible={visible}
      backdropStyle={{ backgroundColor: colors.dark.blackOpacity }}
      onBackdropPress={setVisible}
    >
      <StyledContainer disabled={true}>
        <StyledImage source={item.image} />
        <StyledTextBold>{item.title}</StyledTextBold>

        {info.map((item) => (
          <StyledTextContainer key={item.icon} align={item.icon === "text"}>
            <MaterialCommunityIcons
              name={item.icon}
              color={colors.primary.gray}
              size={20}
            />
            <StyledText>{item.name}</StyledText>
          </StyledTextContainer>
        ))}

        <StyledActions>
          <StyledButtonCart>
            <Button fullWidth text={t("Cart.add")} />
          </StyledButtonCart>
          <TouchableOpacity onPress={handleFavorite}>
            <StyledFavoriteIcon
              name={icon}
              color={colors.primary.gray}
              size={30}
            />
          </TouchableOpacity>
        </StyledActions>
      </StyledContainer>
    </ModalUI>
  );
};

export default Modal;
