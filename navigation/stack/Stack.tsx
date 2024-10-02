import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./types";
import TabNavigator from "./Tab";
import ProductScreen from "../../screens/product/Product";
import CheckoutScreen from "../../screens/checkout/Checkout";
import ShippingDetails from "../../screens/ShippingDetails/ShippingDetails";
import PaymentOptions from "../../screens/paymentOptions/PaymentOptions";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ headerBackTitleVisible: false, title: "Order Summary" }}
      />
      <Stack.Screen
        name="Shipping"
        component={ShippingDetails}
        options={{ headerBackTitleVisible: false, title: "Shipping Address" }}
      />
      <Stack.Screen
        name="PaymentOptions"
        component={PaymentOptions}
        options={{ headerBackTitleVisible: false, title: "Payment Method" }}
      />
    </Stack.Navigator>
  );
}
