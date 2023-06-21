import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "../../consts/colors";
import { CardProps } from "../../models/components";
import Modal from "../Modal";
import {
  StyledContainer,
  StyledContent,
  StyledImage,
  StyledRow,
  StyledText,
  StyledTextBold,
  StyledTextGray,
  StyledTouchable,
} from "./Card.styles";

const Card: React.FC<CardProps> = ({ item, large }) => {
  const [visible, setVisible] = React.useState(false);
  const hasLargeProp = large ?? false;
  const { t } = useTranslation();

  return (
    <StyledContainer large={hasLargeProp} key={item.id}>
      <StyledImage source={item.image} large={hasLargeProp} />
      <StyledContent large={hasLargeProp}>
        <StyledTextBold>{item.title}</StyledTextBold>
        {large && <StyledText>{item.date}</StyledText>}
        <StyledRow justify="space-between">
          <StyledRow>
            <MaterialCommunityIcons
              name="map-marker"
              color={colors.primary.gray}
              size={20}
            />
            <StyledTextGray>{item.location}</StyledTextGray>
          </StyledRow>
          <StyledTouchable onPress={() => setVisible(true)}>
            <StyledText color={colors.light.white}>{t("Feed.join")}</StyledText>
          </StyledTouchable>

          <Modal
            item={item}
            setVisible={() => setVisible(false)}
            visible={visible}
          />
        </StyledRow>
      </StyledContent>
    </StyledContainer>
  );
};

export default Card;
