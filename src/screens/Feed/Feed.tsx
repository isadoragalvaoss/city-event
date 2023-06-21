import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import Categories from "../../components/Categories";
import FeedCards from "../../components/FeedCards";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { eventsEN } from "../../mock/en/events";
import { eventsPT } from "../../mock/pt/events";
import FeedFiltered from "../../utils/feedFiltered";
import { StyledHeaderContainer, StyledSafeAreaView } from "./Feed.styles";

const Feed: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const data = language === "en" ? eventsEN : eventsPT;

  const upComing = data.slice(0, 5);
  const popular = data.slice(8, 13);
  const recommendations = data.slice(14, 19);

  return (
    <StyledSafeAreaView>
      <ScrollView>
        <StyledHeaderContainer>
          <Header />

          <Input
            icon={"magnify"}
            value={value}
            onChange={(e) => setValue(e)}
            placeholder={t("Feed.search")}
            filter
          />
        </StyledHeaderContainer>

        <Categories category={category} setCategory={setCategory} />

        {value || category ? (
          <FeedFiltered value={value} category={category} data={data} />
        ) : (
          <>
            <FeedCards data={upComing} title={t("Feed.upComing")} />

            <FeedCards data={popular} title={t("Feed.popular")} large />

            <FeedCards
              data={recommendations}
              title={t("Feed.recommendations")}
              recommended
            />
          </>
        )}
      </ScrollView>
    </StyledSafeAreaView>
  );
};

export default Feed;
