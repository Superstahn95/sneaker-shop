import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackParamList } from "./types";
import AuthStack from "./AuthStack";
import ProductStack from "./ProductStack";
import HomeScreen from "../../screens/home/Home";

const Tab = createBottomTabNavigator<AppStackParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
