import { IndexPath, SelectItem } from "@ui-kitten/components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledSelect } from "./Select.styles";

const Select: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<IndexPath>(
    new IndexPath(0)
  );
  const english = i18n.language === "en";
  const languageDefined = english ? "English" : "Português (Brasil)";

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
    <StyledSelect
      selectedIndex={selectedLanguage}
      onSelect={onSelect}
      value={languageDefined}
    >
      {language.map(renderOption)}
    </StyledSelect>
  );
};

export default Select;
