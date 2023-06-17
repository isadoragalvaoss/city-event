import React from "react";
import { colors } from "../../consts/colors";
import {
  ButtonText,
  StyledLinearGradient,
  StyledTouchableOpacity,
} from "./Button.styles";

interface ButtonProps {
  onPress: () => void;
  text: string;
}
const Button: React.FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledLinearGradient colors={[colors.primary.red, colors.primary.pink]}>
        <ButtonText>{text}</ButtonText>
      </StyledLinearGradient>
    </StyledTouchableOpacity>
  );
};

export default Button;
