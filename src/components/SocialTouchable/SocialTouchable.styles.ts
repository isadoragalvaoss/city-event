import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  align-items: center;
  border-color: ${colors.primary.gray};
  border-width: 1px;
  border-radius: 3px;
  height: 48px;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const StyledText = styled(Text)`
  color: ${colors.primary.gray};
  font-size: 16px;
`;
