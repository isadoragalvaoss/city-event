import { Modal as ModalUI } from "@ui-kitten/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { colors } from "../../../consts/colors";
import { ConfirmProps } from "../../../models/components";
import { removeCart } from "../../../store/slices/cart";
import { addTicket } from "../../../store/slices/tickets";
import {
  StyledActions,
  StyledButtonCart,
  StyledContainer,
  StyledTextBold,
} from "../../../styles/Modal.styles";
import { navigate } from "../../../utils/navigate";
import Button from "../../Button";

const Confirm: React.FC<ConfirmProps> = ({ visible, item, setVisible }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleCart = () => {
    item.forEach((item) => dispatch(addTicket(item)));
    item.forEach((item) => dispatch(removeCart(item.id)));
    setVisible();
    navigate("Tickets");
  };

  return (
    <ModalUI
      visible={visible}
      backdropStyle={{ backgroundColor: colors.dark.blackOpacity }}
      onBackdropPress={setVisible}
    >
      <StyledContainer disabled={true}>
        <StyledTextBold>{t("Modal.confirm.text")}</StyledTextBold>

        <StyledActions>
          <StyledButtonCart>
            <Button
              outlined
              fullWidth
              text={t("Modal.confirm.button")}
              onPress={handleCart}
            />
          </StyledButtonCart>
        </StyledActions>
      </StyledContainer>
    </ModalUI>
  );
};

export default Confirm;
