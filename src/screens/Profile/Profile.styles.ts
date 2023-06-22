import { Text, View } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";

export const StyledContainer = styled(View)`
  background-color: ${colors.light.white};
  flex: 1;
  align-items: center;
  gap: 30px;
`;

export const StyledTextContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  border: 1px solid ${colors.primary.gray};
  padding: 10px;
`;

export const StyledText = styled(Text)`
  font-size: 16px;
  color: ${colors.primary.gray};
`;

export const StyledButtonContainer = styled(View)`
  width: 100%;
  height: 45%;
  justify-content: flex-end;
  align-items: center;
`;
