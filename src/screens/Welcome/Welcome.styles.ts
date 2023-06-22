import { Image, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { TextProps } from "../../models/styles";

export const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: ${colors.light.white};
  flex: 1;
`;

export const StyledContainer = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 20px;
  margin-horizontal: 30px;
`;

export const StyledImage = styled(Image)`
  width: 350px;
  height: 350px;
`;

export const StyledButtonsContainer = styled(View)`
  flex-direction: row;
  gap: 15px;
`;

export const StyledText = styled(Text)<TextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  color: ${colors.primary.blue};
  text-align: ${(props) => props.textAlign ?? "auto"};
`;
