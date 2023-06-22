import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal as ModalUI } from "@ui-kitten/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../../consts/colors";
import { InfoProps, ModalProps } from "../../../models/components";
import { addCart } from "../../../store/slices/cart";
import { addFavorite, removeFavorite } from "../../../store/slices/favorite";
import {
  StyledActions,
  StyledButtonCart,
  StyledContainer,
  StyledFavoriteIcon,
  StyledImage,
  StyledText,
  StyledTextBold,
  StyledTextContainer,
} from "../../../styles/Modal.styles";
import { navigate } from "../../../utils/navigate";
import useStore from "../../../utils/store";
import Button from "../../Button";

const Info: React.FC<ModalProps> = ({ visible, item, setVisible }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isCart, isFavorite, isTickets } = useStore();
  const icon = isFavorite(item) ? "heart" : "heart-outline";
  const isCartOrTicket = isCart(item) || isTickets(item);

  const info: InfoProps[] = [
    { name: item.date, icon: "calendar" },
    { name: item.location, icon: "map-marker-outline" },
    { name: item.schedule, icon: "clock-outline" },
    { name: item.price.toString(), icon: "cash" },
    { name: item.organizer, icon: "account-group-outline" },
    { name: item.description, icon: "text" },
  ];

  const handleFavorite = () => {
    isFavorite(item)
      ? dispatch(removeFavorite(item.id))
      : dispatch(addFavorite(item));
  };

  const handleCart = () => {
    dispatch(addCart(item));
    navigate("Cart");
    setVisible();
  };

  const buttonText = () => {
    if (isCart(item)) return t("Modal.info.button.cart");
    else if (isTickets(item)) return t("Modal.info.button.ticket");
    else return t("Modal.info.button.add");
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
            <Button
              fullWidth
              text={buttonText()}
              onPress={handleCart}
              disabled={isCartOrTicket}
              outlined={isCartOrTicket}
            />
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

export default Info;
