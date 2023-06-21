import React from "react";
import { colors } from "../../consts/colors";
import { InputProps } from "../../models/components";
import renderLeftIcon from "../../utils/renderLeftIcon";
import renderRightIcon from "../../utils/renderRightIcon";
import { StyledInput } from "./Input.styles";

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  value,
  onChange,
  password,
  filter,
}) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const nameRightIcon = password
    ? secureTextEntry
      ? "eye-off"
      : "eye"
    : "filter-variant";
  const visibleRightIcon = password || filter;
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <StyledInput
      accessoryLeft={() => renderLeftIcon({ icon: icon })}
      secureTextEntry={password && secureTextEntry}
      accessoryRight={() =>
        renderRightIcon({
          name: nameRightIcon,
          onPress: toggleSecureEntry,
          visible: visibleRightIcon,
        })
      }
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      size="large"
      textStyle={{ color: colors.primary.gray }}
    />
  );
};

export default Input;
