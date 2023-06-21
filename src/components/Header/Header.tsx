import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { colors } from "../../consts/colors";
import {
  StyledHeader,
  StyledLocation,
  StyledLocationCity,
  StyledLocationTitle,
} from "./Header.styles";

const Header: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [city, setCity] = useState<string | null>("");
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let place = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      let city = place[0].city;

      setCity(city);
    })();
  }, []);

  let text = "...";
  if (errorMsg) {
    text = errorMsg;
  } else if (city) {
    text = city;
  }

  return (
    <StyledHeader>
      <View>
        <StyledLocationTitle>{t("Feed.location.title")}</StyledLocationTitle>
        <StyledLocation>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color={colors.primary.blue}
            size={25}
          />
          <StyledLocationCity>{text}</StyledLocationCity>
        </StyledLocation>
      </View>
      <MaterialCommunityIcons
        name="cart"
        color={colors.primary.blue}
        size={25}
      />
    </StyledHeader>
  );
};

export default Header;
