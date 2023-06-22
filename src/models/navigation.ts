import { NavigationProp } from "@react-navigation/native";

export interface RootStackParamList {
  Tabs: undefined;
  Login: undefined;
  SignUp: undefined;
  Cart: undefined;
  Feed: undefined;
  Payment: undefined;
  Tickets: undefined;
}

export interface NavigationProps {
  navigation: NavigationProp<RootStackParamList>;
}
