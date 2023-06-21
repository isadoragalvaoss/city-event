import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconProps } from "@ui-kitten/components";
import { colors } from "../consts/colors";

const renderLeftIcon = ({ icon }: IconProps): React.ReactElement => (
  <MaterialCommunityIcons name={icon} color={colors.primary.gray} size={25} />
);

export default renderLeftIcon;
