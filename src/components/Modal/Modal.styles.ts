import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "@ui-kitten/components";
import { Image, Text, View } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";
import { TextContainerProps } from "../../models/styles";

export const StyledContainer = styled(Card)`
  background-color: ${colors.light.white};
`;

export const StyledImage = styled(Image)`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
`;

export const StyledText = styled(Text)`
  font-size: 18px;
  margin-top: 10px;
  width: 85%;
`;

export const StyledTextBold = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;

export const StyledTextContainer = styled(View)<TextContainerProps>`
  flex-direction: row;
  align-items: ${(props) => (props.align ? "center" : "flex-end")};
  gap: 5px;
`;

export const StyledActions = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledButtonCart = styled(View)`
  width: 80%;
`;

export const StyledFavoriteIcon = styled(MaterialCommunityIcons)`
  margin-top: 20px;
`;
