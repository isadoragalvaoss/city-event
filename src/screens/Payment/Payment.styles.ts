import { Divider, RadioGroup } from "@ui-kitten/components";
import { ScrollView, Text, View } from "react-native";
import { styled } from "styled-components";
import { colors } from "../../consts/colors";

export const StyledScrollView = styled(ScrollView)`
  background-color: ${colors.light.white};
  padding-top: 30px;
  padding-horizontal: 20px;
`;

export const StyledTitleText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledCartText = styled(Text)`
  font-size: 16px;
`;

export const StyledDivider = styled(Divider)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledTotalText = styled(Text)`
  text-align: right;
  margin-right: 20px;
  font-size: 18px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  padding-left: 10px;
  padding-top: 10px;
`;

export const StyledRadioText = styled(Text)`
  padding-left: 10px;
  padding-right: 5px;
  font-size: 16px;
`;

export const StyledButtonContainer = styled(View)`
  margin-bottom: 60px;
`;
