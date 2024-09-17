import {
  CompositeScreenProps,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import TabNavigator from "./Tab";
import ProductScreen from "../../screens/product/Product";
import CheckoutScreen from "../../screens/checkout/Checkout";

export type ProductStackParamList = {
  Products: undefined;
  Product: { productId: string };
};

export type TabBarParamList = {
  Home: undefined;
  Cart: undefined;
  Favourites: undefined;
  Profile: undefined;
};

export type AppStackParamList = {
  Tab: NavigatorScreenParams<TabBarParamList>;
  Product: { productId: string };
  Checkout: undefined;
};

export type ProductScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "Product"
>;

export type CheckOutScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "Checkout"
>;

export type CartScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Cart">,
  NativeStackScreenProps<AppStackParamList>
>;
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Home">,
  NativeStackScreenProps<AppStackParamList>
>;

export type FavouritesScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Favourites">,
  NativeStackScreenProps<AppStackParamList>
>;

export type ProfileScreenProp = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Profile">,
  NativeStackScreenProps<AppStackParamList>
>;

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
