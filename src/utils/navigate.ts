import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "../models/navigation";

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const navigate = <RouteName extends keyof RootStackParamList>(
  ...args: RouteName extends keyof RootStackParamList
    ?
        | [screen: RouteName]
        | [screen: RouteName, params: RootStackParamList[RouteName]]
    : [screen: RouteName]
) => {
  navigationRef.current?.navigate(...args);
};
