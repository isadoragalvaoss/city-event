import { Input } from "@ui-kitten/components";
import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledInput = styled(Input)`
  background-color: transparent;
  border-color: ${colors.primary.gray};
  font-weight: bold;
`;
