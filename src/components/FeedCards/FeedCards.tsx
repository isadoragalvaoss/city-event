import { useTranslation } from "react-i18next";
import { FlatList, TouchableOpacity, View } from "react-native";
import { FeedCardsProps, ItemProps } from "../../models/components";
import Card from "../Card";
import { StyledHeader, StyledText, StyledTextTitle } from "./FeedCards.styles";

const FeedCards: React.FC<FeedCardsProps> = ({
  data,
  title,
  large,
  recommended,
}) => {
  const { t } = useTranslation();

  return (
    <View>
      <StyledHeader>
        <StyledTextTitle>{title}</StyledTextTitle>
        <TouchableOpacity>
          <StyledText>{t("Feed.seeAll")}</StyledText>
        </TouchableOpacity>
      </StyledHeader>
      {recommended ? (
        data.map((item) => <Card item={item} key={item.id} />)
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Card item={item} large={large} />}
          keyExtractor={(item: ItemProps) => item.id.toString()}
          horizontal
        />
      )}
    </View>
  );
};

export default FeedCards;
