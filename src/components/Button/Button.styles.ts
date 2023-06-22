import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { ButtonProps } from "../../models/styles";

export const StyledTouchableOpacity = styled(TouchableOpacity)<ButtonProps>`
  width: ${(props) => (props.fullWidth ? 100 : 40)}%;
`;

export const StyledButton = styled(View)<ButtonProps>`
  height: 50px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) =>
    props.outlined ? "transparent" : colors.primary.blue};
  border: ${(props) =>
    props.outlined ? `1px solid ${colors.primary.blue}` : "none"};
`;

export const ButtonText = styled(Text)<ButtonProps>`
  color: ${(props) =>
    props.outlined ? colors.primary.blue : colors.light.white};
  font-size: 16px;
`;
