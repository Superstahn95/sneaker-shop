import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarParamList } from "./types";
import CartScreen from "../../screens/cart/Cart";
import HomeScreen from "../../screens/home/Home";
import FavouritesScreen from "../../screens/favourites/Favourites";
import ProfileScreen from "../../screens/profile/Profile";

const Tab = createBottomTabNavigator<TabBarParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

//rearrange this by nesting the tab stack inside a stack navigator
