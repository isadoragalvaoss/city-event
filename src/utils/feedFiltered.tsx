import { View } from "react-native";
import Card from "../components/Card";
import { FeedProps } from "../models/utils";

const FeedFiltered = ({
  data,
  value,
  category,
}: FeedProps): React.ReactElement => (
  <View style={{ marginTop: 20 }}>
    {data
      .filter((f) =>
        value ? f.title.toLowerCase().includes(value.toLowerCase()) : f
      )
      .filter((f) =>
        category ? f.category.toLowerCase().includes(category.toLowerCase()) : f
      )
      .map((item) => (
        <Card item={item} key={item.id} />
      ))}
  </View>
);

export default FeedFiltered;
