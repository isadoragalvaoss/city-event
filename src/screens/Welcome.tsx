import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

type RootStackParamList = {
  Login: undefined;
};

type WelcomeProps = {
  navigation: NavigationProp<RootStackParamList, "Login">;
};

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Welcome</Text>
      <Button title="Entrar" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};

export default Welcome;
