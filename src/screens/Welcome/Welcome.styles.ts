import { Image, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../consts/colors";

interface ImageProps {
  marginTop: number;
}
export const StyledImage = styled(Image)<ImageProps>`
  margin-top: ${(props) => props.marginTop}px;
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: ${colors.dark.black};
  flex: 1;
`;

export const StyledImageContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledContentContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 10px;
`;

interface TextProps {
  fontSize: number;
  fontWeight?: string;
  textAlign?: string;
}
export const StyledText = styled(Text)<TextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  color: ${colors.light.white};
  text-align: ${(props) => props.textAlign ?? "auto"};
`;
