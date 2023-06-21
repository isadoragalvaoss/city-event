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
