import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { colors } from "../../consts/colors";
import { SocialProps } from "../../models/components";
import { StyledText, StyledTouchableOpacity } from "./SocialTouchable.styles";

const SocialTouchable: React.FC<SocialProps> = ({ icon, text }) => {
  return (
    <StyledTouchableOpacity>
      <MaterialCommunityIcons
        name={icon}
        color={colors.primary.gray}
        size={23}
      />
      <StyledText>{text}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default SocialTouchable;
