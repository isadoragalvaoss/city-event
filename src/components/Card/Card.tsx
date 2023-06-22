import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { colors } from "../../consts/colors";
import { CardProps } from "../../models/components";
import Modal from "../Modal/Info";
import Remove from "../Modal/Remove/Remove";
import {
  StyledActions,
  StyledContainer,
  StyledContent,
  StyledImage,
  StyledRow,
  StyledText,
  StyledTextBold,
  StyledTextGray,
  StyledTouchable,
} from "./Card.styles";

const Card: React.FC<CardProps> = ({
  item,
  large,
  remove,
  favorite,
  ticket,
}) => {
  const [visibleInfo, setVisibleInfo] = React.useState(false);
  const [visibleRemove, setVisibleRemove] = React.useState(false);
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
          {remove ? (
            <StyledActions>
              <TouchableOpacity onPress={() => setVisibleInfo(true)}>
                <MaterialCommunityIcons
                  name={"information"}
                  color={colors.primary.gray}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setVisibleRemove(true)}>
                <MaterialCommunityIcons
                  name={favorite ? "heart" : "trash-can"}
                  color={colors.primary.gray}
                  size={20}
                />
              </TouchableOpacity>
            </StyledActions>
          ) : (
            <StyledTouchable onPress={() => setVisibleInfo(true)}>
              <StyledText color={colors.light.white}>
                {t("Feed.join")}
              </StyledText>
            </StyledTouchable>
          )}

          <Remove
            item={item}
            setVisible={() => setVisibleRemove(false)}
            visible={visibleRemove}
            favorite={favorite}
            ticket={ticket}
          />
          <Modal
            item={item}
            setVisible={() => setVisibleInfo(false)}
            visible={visibleInfo}
          />
        </StyledRow>
      </StyledContent>
    </StyledContainer>
  );
};

export default Card;
