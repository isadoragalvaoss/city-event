import { IconProps } from "@ui-kitten/components";

export interface InputProps {
  icon: IconProps;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  password?: boolean;
}

export interface ButtonProps {
  onPress: () => void;
  text: string;
}

export interface SocialProps {
  icon: IconProps;
  text: string;
}
