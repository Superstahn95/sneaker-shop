import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import TabNavigator from "./navigation/stack/Tab";
import StackNavigation from "./navigation/stack/Stack";
import AuthStack from "./navigation/stack/AuthStack";

export default function App() {
  const isSignedIn = false;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
        {/* {isSignedIn ? <TabNavigator /> : <AuthStack />} */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
