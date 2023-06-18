import React from "react";
import { colors } from "../../consts/colors";
import { ButtonProps } from "../../models/components";
import {
  ButtonText,
  StyledLinearGradient,
  StyledTouchableOpacity,
} from "./Button.styles";

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
