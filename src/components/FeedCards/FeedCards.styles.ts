import { Text, View } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";

export const StyledHeader = styled(View)`
  flex-direction: row;
  padding: 30px;
  padding-bottom: 10px;
  justify-content: space-between;
`;

export const StyledTextTitle = styled(Text)`
  color: ${colors.dark.black};
  font-size: 16px;
  font-weight: bold;
`;

export const StyledText = styled(Text)`
  color: ${colors.primary.blue};
  font-size: 16px;
`;
