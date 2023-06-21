import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: ${colors.light.white};
  flex: 1;
`;

export const StyledHeaderContainer = styled(View)`
  padding: 30px;
  padding-bottom: 10px;
  gap: 10px;
`;
