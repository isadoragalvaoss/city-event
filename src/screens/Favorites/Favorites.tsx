import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import { ItemProps } from "../../models/components";
import { RootState } from "../../store/store";
import { StyledScrollView, StyledText, StyledView } from "./Favorites.styles";

const Favorites: React.FC = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const { t } = useTranslation();

  return (
    <StyledScrollView>
      <StyledView>
        {favorites.length ? (
          favorites?.map((item: ItemProps) => (
            <Card item={item} key={item.id} />
          ))
        ) : (
          <StyledText>{t("Favorite.none")}</StyledText>
        )}
      </StyledView>
    </StyledScrollView>
  );
};

export default Favorites;
