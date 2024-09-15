import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/stack/Stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/stack/Tab";
import AuthStack from "./navigation/stack/AuthStack";

export default function App() {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* {isSignedIn ? <TabNavigator /> : <AuthStack />} */}
    </NavigationContainer>
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
