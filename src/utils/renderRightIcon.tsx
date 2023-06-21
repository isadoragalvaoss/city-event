import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import { colors } from "../consts/colors";
import { RenderProps } from "../models/utils";

const renderRightIcon = ({
  onPress,
  name,
  visible,
}: RenderProps): React.ReactElement => (
  <>
    {visible && (
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          name={name}
          color={colors.primary.gray}
          size={25}
        />
      </TouchableWithoutFeedback>
    )}
  </>
);

export default renderRightIcon;
