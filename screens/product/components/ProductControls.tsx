import { StyleSheet, Text, View } from "react-native";
import AddToBag from "./AddToBag";
import AddToFavourites from "./AddToFavourites";
import Container from "../../../components/container/Container";
import { CartType } from "../../../features/cart/cartSlice";

export default function ProductControls(product: CartType) {
  return (
    <View style={styles.footer}>
      <Container>
        <View style={styles.buttonsWrapper}>
          <View style={{ flex: 1 }}>
            <AddToFavourites />
          </View>
          <View style={{ flex: 1 }}>
            <AddToBag
              _id={product._id}
              color={product.color}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              size={product.size}
            />
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
