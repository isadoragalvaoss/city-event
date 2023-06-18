import React from "react";
import Button from "../../components/Button";
import { welcomeImages } from "../../consts/images";
import { NavigationProps } from "../../models/navigation";
import {
  StyledContentContainer,
  StyledImage,
  StyledImageContainer,
  StyledSafeAreaView,
  StyledText,
} from "./Welcome.styles";

const Welcome: React.FC<NavigationProps> = ({ navigation }) => {
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
        <Button
          text="Get Started"
          onPress={() => navigation.navigate("Login")}
        />
      </StyledContentContainer>
    </StyledSafeAreaView>
  );
};

export default Welcome;
