import React from "react";
import { ButtonProps } from "../../models/components";
import {
  ButtonText,
  StyledButton,
  StyledTouchableOpacity,
} from "./Button.styles";

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  fullWidth,
  disabled,
  outlined,
}) => {
  return (
    <StyledTouchableOpacity
      onPress={onPress}
      fullWidth={fullWidth ?? false}
      disabled={disabled}
    >
      <StyledButton outlined={outlined}>
        <ButtonText outlined={outlined}>{text}</ButtonText>
      </StyledButton>
    </StyledTouchableOpacity>
  );
};

export default Button;
