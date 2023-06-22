import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import { colors } from "../../consts/colors";
import { navigate } from "../../utils/navigate";
import {
  StyledButtonContainer,
  StyledContainer,
  StyledText,
  StyledTextContainer,
} from "./Profile.styles";

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <MaterialCommunityIcons
        name="account"
        color={colors.primary.blue}
        size={150}
      />
      <StyledTextContainer>
        <StyledText>Isadora</StyledText>
      </StyledTextContainer>
      <StyledTextContainer>
        <StyledText>Isadora@gmail.com</StyledText>
      </StyledTextContainer>

      <StyledButtonContainer>
        <Button
          text={t("Logout.text")}
          onPress={() => navigate("Login")}
          outlined
        />
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default Profile;
