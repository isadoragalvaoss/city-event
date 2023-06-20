import { IndexPath, SelectItem } from "@ui-kitten/components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import "../../i18n/config";
import { NavigationProps } from "../../models/navigation";
import {
  StyledButtonsContainer,
  StyledContainer,
  StyledImage,
  StyledSafeAreaView,
  StyledSelect,
  StyledText,
} from "./Welcome.styles";

const Welcome: React.FC<NavigationProps> = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<IndexPath>(
    new IndexPath(0)
  );

  const onSelect = (index: any) => {
    setSelectedLanguage(index);
    if (index.toString() === "1") i18n.changeLanguage("en");
    else i18n.changeLanguage("pt");
  };

  const language = ["English", "Português (Brasil)"];
  const renderOption = (title: string): React.ReactElement => (
    <SelectItem title={title} key={title} />
  );
  return (
    <StyledSafeAreaView>
      <StyledContainer>
        <StyledSelect
          selectedIndex={selectedLanguage}
          onSelect={onSelect}
          placeholder={"default"}
          value={language[selectedLanguage.row]}
        >
          {language.map(renderOption)}
        </StyledSelect>
        <StyledImage source={require("../../assets/welcome/initial.jpg")} />
        <StyledText fontSize={28} fontWeight="bold">
          EVENTUS
        </StyledText>
        <StyledText fontSize={16} textAlign="center">
          {t("Welcome.title")}
        </StyledText>
        <StyledButtonsContainer>
          <Button text="LOGIN" onPress={() => navigation.navigate("Login")} />
          <Button
            text={t("Welcome.signup")}
            onPress={() => navigation.navigate("SignUp")}
          />
        </StyledButtonsContainer>
      </StyledContainer>
    </StyledSafeAreaView>
  );
};

export default Welcome;
