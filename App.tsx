import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import { Provider } from "react-redux";
import Stacks from "./src/screens/Stacks";
import store from "./src/store/store";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <NavigationContainer>
          <Stacks />
        </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  );
}
