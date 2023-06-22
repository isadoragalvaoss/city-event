import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { colors } from "../consts/colors";
import { navigate } from "./navigate";

const renderBackIcon = (): React.ReactElement => (
  <TouchableOpacity
    onPress={() => navigate("Cart")}
    style={{ paddingLeft: 20 }}
  >
    <MaterialCommunityIcons
      name={"arrow-left"}
      color={colors.primary.gray}
      size={20}
    />
  </TouchableOpacity>
);

export default renderBackIcon;
