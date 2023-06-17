import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  width: 100%;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  height: 50px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled(Text)`
  color: ${colors.light.white};
  font-size: 18px;
`;
