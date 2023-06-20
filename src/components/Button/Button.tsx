import React from "react";
import { ButtonProps } from "../../models/components";
import {
  ButtonText,
  StyledLinearGradient,
  StyledTouchableOpacity,
} from "./Button.styles";

const Button: React.FC<ButtonProps> = ({ onPress, text, fullWidth }) => {
  return (
    <StyledTouchableOpacity onPress={onPress} fullWidth={fullWidth ?? false}>
      <StyledLinearGradient>
        <ButtonText>{text}</ButtonText>
      </StyledLinearGradient>
    </StyledTouchableOpacity>
  );
};

export default Button;
