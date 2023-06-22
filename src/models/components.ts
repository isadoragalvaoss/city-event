import { IconProps } from "@ui-kitten/components";
import { ImageSourcePropType } from "react-native";

export interface InputProps {
  icon: IconProps;
  placeholder: string;
  onChange?: (value: string) => void;
  value: string;
  password?: boolean;
  filter?: boolean;
}

export interface ButtonProps {
  onPress?: () => void;
  text?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  outlined?: boolean;
}

export interface SocialProps {
  icon: IconProps;
  text: string;
}

export interface CardProps {
  item: ItemProps;
  large?: boolean;
  remove?: boolean;
  favorite?: boolean;
  ticket?: boolean;
}

export interface ItemProps {
  id: string;
  title: string;
  location: string;
  image: ImageSourcePropType;
  date: string;
  category: string;
  description: string;
  price: number;
  schedule: string;
  organizer: string;
}

export interface CategoriesProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}
export interface CategoryProps {
  id: number;
  title: string;
}

export interface ModalProps {
  visible: boolean;
  item: ItemProps;
  setVisible: () => void;
  favorite?: boolean;
  ticket?: boolean;
}

export interface ConfirmProps {
  visible: boolean;
  item: ItemProps[];
  setVisible: () => void;
}
export interface InfoProps {
  name: string;
  icon: IconProps;
}

export interface FeedCardsProps {
  data: ItemProps[];
  title: string;
  large?: boolean;
  recommended?: boolean;
}
