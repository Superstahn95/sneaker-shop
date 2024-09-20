import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/button/Button";

export default function AddToBag() {
  return (
    <Button
      onPress={() => console.log("add to bag")}
      title="Add to Bag"
      isFilled
    />
  );
}

const styles = StyleSheet.create({});
