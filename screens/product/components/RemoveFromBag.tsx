import { StyleSheet } from "react-native";
import Button from "../../../components/button/Button";
import { removeFromCart } from "../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../hooks/redux";

interface RemoveFromBagProps {
  _id: string;
}

export default function RemoveFromBag({ _id }: RemoveFromBagProps) {
  const dispatch = useAppDispatch();
  const handleItemRemoval = () => {
    dispatch(removeFromCart(_id));
  };
  return (
    <Button onPress={handleItemRemoval} title="Remove From Bag" isFilled />
  );
}

const styles = StyleSheet.create({});
