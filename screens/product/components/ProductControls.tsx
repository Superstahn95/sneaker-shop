import { StyleSheet, Text, View } from "react-native";
import AddToBag from "./AddToBag";
import RemoveFromBag from "./RemoveFromBag";
import RemoveFromFavourites from "./RemoveFromFavourites";
import AddToFavourites from "./AddToFavourites";
import Container from "../../../components/container/Container";
import { CartType } from "../../../features/cart/cartSlice";
import { getSingleItem } from "../../../features/cart/cartSlice";
import { getSingleFavouriteItem } from "../../../features/favourite/favouriteSlice";
import { useAppSelector } from "../../../hooks/redux";

export default function ProductControls(product: CartType) {
  const itemInCart = useAppSelector((state) =>
    getSingleItem(state, product._id)
  );
  const itemInFavourites = useAppSelector((state) =>
    getSingleFavouriteItem(state, product._id)
  );
  return (
    <View style={styles.footer}>
      <Container>
        <View style={styles.buttonsWrapper}>
          <View style={{ flex: 1 }}>
            {itemInFavourites ? (
              <RemoveFromFavourites _id={product._id} />
            ) : (
              <AddToFavourites
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            )}
          </View>
          <View style={{ flex: 1 }}>
            {itemInCart ? (
              <RemoveFromBag _id={product._id} />
            ) : (
              <AddToBag
                _id={product._id}
                color={product.color}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                size={product.size}
              />
            )}
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
