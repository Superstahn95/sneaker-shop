import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductStackParamList } from "./types";
import ProductScreen from "../../screens/product/Product";

const Stack = createNativeStackNavigator<ProductStackParamList>();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
