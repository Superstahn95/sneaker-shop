import { StyleSheet, Text, View } from "react-native";
import AddToBag from "./AddToBag";
import AddToFavourites from "./AddToFavourites";
import Container from "../../../components/container/Container";

export default function ProductControls() {
  return (
    <View style={styles.footer}>
      <Container>
        <View style={styles.buttonsWrapper}>
          <View style={{ flex: 1 }}>
            <AddToFavourites />
          </View>
          <View style={{ flex: 1 }}>
            <AddToBag />
          </View>
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
  },
  buttonsWrapper: {
    flexDirection: "row",
    gap: 10,
  },
});
