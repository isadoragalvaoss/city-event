import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { colors } from "../../consts/colors";
import { InputProps } from "../../models/components";
import { StyledInput } from "./Input.styles";

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  value,
  onChange,
  password,
}) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderRightIcon = (): React.ReactElement => (
    <>
      {password && (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <MaterialCommunityIcons
            name={secureTextEntry ? "eye-off" : "eye"}
            color={colors.primary.gray}
            size={25}
          />
        </TouchableWithoutFeedback>
      )}
    </>
  );

  const renderLeftIcon = (): React.ReactElement => (
    <MaterialCommunityIcons name={icon} color={colors.primary.gray} size={25} />
  );

  return (
    <StyledInput
      accessoryLeft={renderLeftIcon}
      secureTextEntry={password && secureTextEntry}
      accessoryRight={renderRightIcon}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      size="large"
      textStyle={{ color: colors.primary.gray }}
    />
  );
};

export default Input;
