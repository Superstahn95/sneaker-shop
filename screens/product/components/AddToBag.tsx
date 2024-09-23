import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/button/Button";
import { addToCart } from "../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../hooks/redux";
import { CartType } from "../../../features/cart/cartSlice";
// export type CartType = {
//     _id: string;
//     name: string;
//     price: number;
//     image: string;
//     color: string;
//     size: number;
//     quantity: number;
//   };

export default function AddToBag(cartDetails: CartType) {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(cartDetails));
  };

  return <Button onPress={handleAddToCart} title="Add to Bag" isFilled />;
}

const styles = StyleSheet.create({});
