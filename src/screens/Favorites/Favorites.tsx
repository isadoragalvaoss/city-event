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

const Favorites: React.FC = () => {
  const { favorites } = useStore();
  const { t } = useTranslation();

  return (
    <StyledScrollView>
      <StyledView>
        {favorites.length ? (
          favorites?.map((item: ItemProps) => (
            <Card item={item} key={item.id} remove favorite />
          ))
        ) : (
          <StyledText>{t("Favorite.none")}</StyledText>
        )}
      </StyledView>
    </StyledScrollView>
  );
};

export default Favorites;
