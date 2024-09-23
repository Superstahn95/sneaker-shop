import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarParamList } from "./types";
import CartScreen from "../../screens/cart/Cart";
import HomeScreen from "../../screens/home/Home";
import FavouritesScreen from "../../screens/favourites/Favourites";
import ProfileScreen from "../../screens/profile/Profile";
import { Colors } from "../../utils/colors";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator<TabBarParamList>();
type IconName =
  | "home"
  | "home-outline"
  | "cart"
  | "cart-outline"
  | "heart-sharp"
  | "heart-outline"
  | "user"
  | "user-alt"; // Add more icons if needed
// RouteProp<TabBarParamList, keyof TabBarParamList>
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: IconName = "home";
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Favourites") {
            iconName = focused ? "heart-sharp" : "heart-outline";
          } else if (route.name === "Profile") {
            const icon = focused ? (
              <FontAwesome5 name="user" size={24} color={color} />
            ) : (
              <FontAwesome5 name="user-alt" size={24} color={color} />
            );
            return icon;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#B3B3B3",
      })}
    >
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
