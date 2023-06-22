import { Modal as ModalUI } from "@ui-kitten/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { colors } from "../../../consts/colors";
import { ModalProps } from "../../../models/components";
import { removeCart } from "../../../store/slices/cart";
import { removeFavorite } from "../../../store/slices/favorite";
import { removeTicket } from "../../../store/slices/tickets";
import {
  StyledActions,
  StyledButtonCart,
  StyledContainer,
  StyledTextBold,
} from "../../../styles/Modal.styles";
import Button from "../../Button";

const Remove: React.FC<ModalProps> = ({
  visible,
  item,
  setVisible,
  favorite,
  ticket,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleCart = () => {
    if (favorite) {
      dispatch(removeFavorite(item.id));
      setVisible();
    } else if (ticket) {
      dispatch(removeTicket(item.id));
      setVisible();
    } else {
      dispatch(removeCart(item.id));
      setVisible();
    }
  };

  return (
    <ModalUI
      visible={visible}
      backdropStyle={{ backgroundColor: colors.dark.blackOpacity }}
      onBackdropPress={setVisible}
    >
      <StyledContainer disabled={true}>
        <StyledTextBold>{t("Modal.remove.text")}</StyledTextBold>

        <StyledActions>
          <StyledButtonCart>
            <Button
              fullWidth
              text={t("Modal.remove.button")}
              onPress={handleCart}
              outlined
            />
          </StyledButtonCart>
        </StyledActions>
      </StyledContainer>
    </ModalUI>
  );
};

export default Remove;
