import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import React from "react";
import { Provider } from "react-redux";
import Stacks from "./src/screens/Stacks";
import store from "./src/store/store";
import { navigationRef } from "./src/utils/navigate";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer ref={navigationRef}>
        <Provider store={store}>
          <Stacks />
        </Provider>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
