import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getCart } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../hooks/redux";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import CartItem from "./components/CartItem";
import RelatedProducts from "./components/RelatedProducts";

export default function CartScreen() {
  const cartItems = useAppSelector((state) => getCart(state));
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <Container>
          {cartItems.length < 1 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Text style={{ fontSize: 20 }}>There are no items in cart</Text>
              <Button
                title="Go grab some sneakers"
                onPress={() => console.log("take us to a page")}
                isFilled
              />
            </View>
          ) : (
            <View>
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  color={item.color}
                  price={item.price}
                  quantity={item.quantity}
                  size={item.size}
                  image={item.image}
                />
              ))}
            </View>
          )}

          {/* navigation buttons */}
          <View style={styles.buttonsWrapper}>
            <View style={{ flex: 1 }}>
              <Button
                title={"view bag (1)"}
                onPress={() => console.log("do something else")}
                optionalTextColor="#696969"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title={"checkout"}
                onPress={() => console.log("go to checkout")}
                isFilled
              />
            </View>
          </View>
          <RelatedProducts category="static" />
        </Container>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: "row",
    gap: 10,
  },
});
