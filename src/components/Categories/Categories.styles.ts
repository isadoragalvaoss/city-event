import { FlatList, TouchableOpacity } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${colors.light.gray};
  padding: 10px;
  margin-right: 30px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
`;

export const StyledFlatList = styled(FlatList)`
  margin-left: 30px;
`;
