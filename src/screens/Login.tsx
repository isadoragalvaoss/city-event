import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

type RootStackParamList = {
  Tabs: undefined;
};

type LoginProps = {
  navigation: NavigationProp<RootStackParamList, "Tabs">;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button title="Entrar" onPress={() => navigation.navigate("Tabs")} />
    </SafeAreaView>
  );
};

export default Login;
