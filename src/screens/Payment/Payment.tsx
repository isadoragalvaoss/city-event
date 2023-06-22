import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Radio } from "@ui-kitten/components";
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Confirm from "../../components/Modal/Confirm";
import { colors } from "../../consts/colors";
import { ItemProps } from "../../models/components";
import { navigate } from "../../utils/navigate";
import useStore from "../../utils/store";
import {
  StyledButtonContainer,
  StyledDivider,
  StyledRadioGroup,
  StyledRadioText,
  StyledScrollView,
  StyledTitleText,
  StyledTotalText,
} from "./Payment.styles";

const Payment: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [visibleConfirm, setVisibleConfirm] = React.useState(false);
  const { carts } = useStore();
  const { t } = useTranslation();
  const total = carts.reduce((acc, item) => acc + item.price, 0);

  return (
    <StyledScrollView>
      <StyledTitleText>{t("Payment.order")}</StyledTitleText>
      {carts.map((item: ItemProps) => (
        <Card item={item} remove key={item.id} />
      ))}
      <StyledDivider />
      <StyledTotalText>Total: {total}</StyledTotalText>

      <StyledTitleText>{t("Payment.method")}</StyledTitleText>
      <StyledRadioGroup
        selectedIndex={selectedIndex}
        onChange={(index) => setSelectedIndex(index)}
      >
        <Radio>
          <>
            <StyledRadioText>Pix</StyledRadioText>
            <MaterialCommunityIcons name={"cash"} color={"green"} size={22} />
          </>
        </Radio>
        <Radio>
          <>
            <StyledRadioText>{t("Payment.card")}</StyledRadioText>
            <MaterialCommunityIcons
              name={"credit-card"}
              color={colors.primary.blue}
              size={22}
            />
          </>
        </Radio>
      </StyledRadioGroup>
      {!!carts.length ? (
        <StyledButtonContainer>
          <Button
            text={t("Payment.done")}
            fullWidth
            onPress={() => setVisibleConfirm(true)}
          />
        </StyledButtonContainer>
      ) : (
        <Button
          fullWidth
          text={t("Cart.more")}
          onPress={() => navigate("Feed")}
          outlined
        />
      )}
      <Confirm
        item={carts}
        setVisible={() => setVisibleConfirm(false)}
        visible={visibleConfirm}
      />
    </StyledScrollView>
  );
};

export default Payment;
