import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/button/Button";

export default function AddToFavourites() {
  return (
    <Button
      onPress={() => console.log("add to favourites")}
      title="Favourite"
      optionalTextColor="#696969"
    />
  );
}

const styles = StyleSheet.create({});
