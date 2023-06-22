import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "../consts/colors";
import renderBackIcon from "../utils/renderBack";
import Cart from "./Cart/Cart";
import Favorites from "./Favorites";
import Feed from "./Feed";
import Payment from "./Payment";
import Profile from "./Profile";
import Tickets from "./Tickets";

const Tabs: React.FC = () => {
  const Tab = createBottomTabNavigator();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: colors.primary.blue,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Tickets"}
        component={Tickets}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={t("Tabs.Favorites")}
        component={Favorites}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={t("Tabs.Profile")}
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={"Cart"}
        component={Cart}
        options={{
          tabBarShowLabel: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name={"Payment"}
        component={Payment}
        options={{
          tabBarShowLabel: false,
          tabBarButton: () => null,
          headerLeft: renderBackIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
