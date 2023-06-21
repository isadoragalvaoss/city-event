import { IconProps } from "@ui-kitten/components";
import { ItemProps } from "./components";

export interface RenderProps {
  name: IconProps;
  onPress: () => void;
  visible?: boolean;
}

export interface FeedProps {
  data: ItemProps[];
  value: string;
  category: string;
}
