import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { ItemProps } from "../../models/components";
import {
  StyledScrollView,
  StyledText,
  StyledView,
} from "../../styles/Screens.styles";
import { navigate } from "../../utils/navigate";
import useStore from "../../utils/store";
import { StyledContainer, StyledContent } from "./Cart.styles";

const Cart: React.FC = () => {
  const { carts } = useStore();
  const { t } = useTranslation();

  return (
    <StyledScrollView>
      <StyledView>
        {carts?.length ? (
          <>
            {carts?.map((item: ItemProps) => (
              <Card item={item} key={item.id} remove />
            ))}
            <StyledContainer>
              <StyledContent>
                <Button
                  fullWidth
                  text={t("Cart.more")}
                  onPress={() => navigate("Feed")}
                />
                <Button
                  fullWidth
                  text={t("Cart.payment")}
                  onPress={() => navigate("Payment")}
                  outlined
                />
              </StyledContent>
            </StyledContainer>
          </>
        ) : (
          <StyledText>{t("Cart.none")}</StyledText>
        )}
      </StyledView>
    </StyledScrollView>
  );
};

export default Cart;
