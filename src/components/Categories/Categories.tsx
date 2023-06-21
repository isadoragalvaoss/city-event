import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { colors } from "../../consts/colors";
import { categoriesEN } from "../../mock/en/categories";
import { categoriesPT } from "../../mock/pt/categories";
import { CategoriesProps, CategoryProps } from "../../models/components";
import { StyledFlatList, StyledTouchableOpacity } from "./Categories.styles";

const Categories: React.FC<CategoriesProps> = ({ category, setCategory }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const categories: CategoryProps[] =
    language === "en" ? categoriesEN : categoriesPT;

  return (
    <StyledFlatList
      data={categories}
      renderItem={({ item }: any) => (
        <StyledTouchableOpacity
          onPress={() => {
            item.title === category ? setCategory("") : setCategory(item.title);
          }}
        >
          <Text key={item.id}>{item.title}</Text>
          {category === item.title && (
            <MaterialCommunityIcons
              name="check"
              color={colors.primary.blue}
              size={16}
            />
          )}
        </StyledTouchableOpacity>
      )}
      keyExtractor={(item: any) => item.id.toString()}
      horizontal
    />
  );
};

export default Categories;
