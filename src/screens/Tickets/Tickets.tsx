import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card";
import { ItemProps } from "../../models/components";
import {
  StyledScrollView,
  StyledText,
  StyledView,
} from "../../styles/Screens.styles";
import useStore from "../../utils/store";

const Tickets: React.FC = () => {
  const { tickets } = useStore();
  const { t } = useTranslation();

  return (
    <StyledScrollView>
      <StyledView>
        {tickets.length ? (
          tickets?.map((item: ItemProps) => (
            <Card item={item} key={item.id} remove ticket />
          ))
        ) : (
          <StyledText>{t("Tickets.none")}</StyledText>
        )}
      </StyledView>
    </StyledScrollView>
  );
};

export default Tickets;
