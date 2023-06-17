import { NavigationProp } from "@react-navigation/native";
import React from "react";
import Button from "../../components/Button";
import { welcomeImages } from "../../consts/images";
import {
  StyledContentContainer,
  StyledImage,
  StyledImageContainer,
  StyledSafeAreaView,
  StyledText,
} from "./Welcome.styles";

type RootStackParamList = {
  Login: undefined;
};

type WelcomeProps = {
  navigation: NavigationProp<RootStackParamList, "Login">;
};

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <StyledSafeAreaView>
      <StyledImageContainer>
        {welcomeImages.map((image) => (
          <StyledImage
            marginTop={image.margin}
            source={image.src}
            key={image.src}
          />
        ))}
      </StyledImageContainer>
      <StyledContentContainer>
        <StyledText fontSize={24} fontWeight="bold">
          Find your favorite events here
        </StyledText>
        <StyledText fontSize={14} textAlign="center">
          Unlock the world of exciting events and create lasting memories
        </StyledText>
        <Button text="LOGIN" onPress={() => navigation.navigate("Login")} />
      </StyledContentContainer>
    </StyledSafeAreaView>
  );
};

export default Welcome;
