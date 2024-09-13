import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackParamList } from "./types";
import AuthStack from "./AuthStack";
import ProductStack from "./ProductStack";

const Tab = createBottomTabNavigator<AppStackParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AuthStack" component={AuthStack} />
      <Tab.Screen name="ProductStack" component={ProductStack} />
    </Tab.Navigator>
  );
}
