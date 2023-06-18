import { NavigationProp } from "@react-navigation/native";

interface RootStackParamList {
  Tabs: undefined;
  Login: undefined;
  SignUp: undefined;
}

export interface NavigationProps {
  navigation: NavigationProp<RootStackParamList>;
}
