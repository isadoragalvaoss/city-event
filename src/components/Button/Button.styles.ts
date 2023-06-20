import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { ButtonProps } from "../../models/components";

export const StyledTouchableOpacity = styled(TouchableOpacity)<ButtonProps>`
  width: ${(props) => (props.fullWidth ? 100 : 40)}%;
`;

export const StyledLinearGradient = styled(View)`
  height: 50px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${colors.primary.blue};
`;

export const ButtonText = styled(Text)`
  color: ${colors.light.white};
  font-size: 16px;
`;
