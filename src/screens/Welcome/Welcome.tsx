import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Select from "../../components/Select";
import "../../i18n/config";
import { navigate } from "../../utils/navigate";
import {
  StyledButtonsContainer,
  StyledContainer,
  StyledImage,
  StyledSafeAreaView,
  StyledText,
} from "./Welcome.styles";

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledSafeAreaView>
      <StyledContainer>
        <Select />
        <StyledImage source={require("../../assets/welcome/initial.jpg")} />
        <StyledText fontSize={28} fontWeight="bold">
          EVENTUS
        </StyledText>
        <StyledText fontSize={16} textAlign="center">
          {t("Welcome.title")}
        </StyledText>
        <StyledButtonsContainer>
          <Button text="LOGIN" onPress={() => navigate("Login")} />
          <Button
            text={t("Welcome.signup")}
            onPress={() => navigate("SignUp")}
          />
        </StyledButtonsContainer>
      </StyledContainer>
    </StyledSafeAreaView>
  );
};

export default Welcome;
