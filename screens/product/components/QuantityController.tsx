import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../hooks/redux";

interface QuantityControllerProps {
  _id: string;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantityController({
  _id,
  quantity,
  setQuantity,
}: QuantityControllerProps) {
  const dispatch = useAppDispatch();
  const handleQuantityIncrement = () => {
    setQuantity((prev) => prev + 1);
    //dispatch quantity increment
    dispatch(incrementQuantity(_id));
  };
  const handleQuantityDecrement = () => {
    if (quantity === 1) {
      // do nothing
      return;
    }
    setQuantity((prev) => prev - 1);
    //dispatch quantity decrement
    dispatch(decrementQuantity(_id));
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 100,
      }}
    >
      <Text>Quantity</Text>
      <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
        <TouchableOpacity onPress={handleQuantityDecrement}>
          {/* <Text style={styles.controlsText}>-</Text> */}
          <View style={{ width: 20, height: 1, backgroundColor: "black" }} />
        </TouchableOpacity>
        <Text style={[styles.controlsText, { fontWeight: "bold" }]}>
          {quantity}
        </Text>
        <TouchableOpacity onPress={handleQuantityIncrement}>
          <Text style={styles.controlsText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controlsText: {
    fontSize: 18,
  },
});
