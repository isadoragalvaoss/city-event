import { Image, Text, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";
import { CardProps } from "../../models/styles";

export const StyledContainer = styled(View)<CardProps>`
  height: ${(props) => (props.large ? 280 : 100)}px;
  flex-direction: ${(props) => (props.large ? "column" : "row")};
  padding: ${(props) => (props.large ? 0 : 18)}px;
  background-color: ${colors.light.gray};
  border-radius: 10px;
  margin-left: 30px;
  width: 300px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const StyledImage = styled(Image)<CardProps>`
  height: ${(props) => (props.large ? 170 : 80)}px;
  width: ${(props) => (props.large ? 300 : 80)}px;
`;

export const StyledContent = styled(View)<CardProps>`
  gap: ${(props) => (props.large ? 0 : 10)}px;
  width: ${(props) => (props.large ? 90 : 65)}%;
  height: ${(props) => (props.large ? 95 : 75)}px;
  justify-content: ${(props) => (props.large ? "center" : "space-around")};
`;

export const StyledRow = styled(View)<CardProps>`
  flex-direction: row;
  justify-content: ${(props) => props.justify ?? "auto"};
  align-items: center;
`;

export const StyledTouchable = styled(TouchableOpacity)`
  width: 80px;
  background-color: ${colors.primary.blue};
  align-items: center;
  border-radius: 5px;
`;

export const StyledText = styled(Text)<CardProps>`
  padding: 8px;
  color: ${(props) => props.color ?? colors.dark.black};
`;

export const StyledTextBold = styled(Text)`
  font-weight: bold;
`;

export const StyledTextGray = styled(Text)`
  color: ${colors.primary.gray};
`;

export const StyledActions = styled(View)`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
