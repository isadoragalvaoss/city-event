import { Text, View } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";

export const StyledHeaderContainer = styled(View)`
  padding: 30px;
  padding-bottom: 10px;
  gap: 10px;
`;

export const StyledHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const StyledLocation = styled(View)`
  padding-top: 2px;
  flex-direction: row;
  align-items: center;
`;

export const StyledLocationTitle = styled(Text)`
  font-size: 18px;
  color: ${colors.dark.black};
`;

export const StyledLocationCity = styled(Text)`
  font-size: 16px;
  color: ${colors.primary.gray};
`;

export const StyledCartText = styled(Text)`
  text-align: right;
  color: ${colors.primary.gray};
`;
