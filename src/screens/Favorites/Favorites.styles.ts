import { ScrollView, Text, View } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";

export const StyledScrollView = styled(ScrollView)`
  background-color: ${colors.light.white};
  padding-top: 30px;
  flex: 1;
  padding-bottom: 100px;
`;

export const StyledView = styled(View)`
  padding-bottom: 40px;
`;

export const StyledText = styled(Text)`
  font-size: 18px;
  text-align: center;
`;
