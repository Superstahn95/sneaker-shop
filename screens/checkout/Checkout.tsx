import { StyleSheet, View, Text } from "react-native";
import Container from "../../components/container/Container";
import { CheckOutScreenProps } from "../../navigation/stack/types";
import Button from "../../components/button/Button";
import { Colors } from "../../utils/colors";
import { getCartTotal, getCart } from "../../features/cart/cartSlice";
import { useAppSelector } from "../../hooks/redux";

interface DescriptionTextProps {
  description: string;
  figure?: number;
  isCurrency?: boolean;
}

export default function CheckoutScreen({ navigation }: CheckOutScreenProps) {
  const totalOrder = useAppSelector((state) => getCartTotal(state));
  const cart = useAppSelector((state) => getCart(state));
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <View
          style={{
            marginTop: 85,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: Colors.primary,
            borderRadius: 16,
            padding: 24,
          }}
        >
          <DescriptionText description={"Cart Subtotal"} figure={totalOrder} />
          <DescriptionText description={"Shipping"} />
          <DescriptionText description={"Item"} figure={cart.length} />
          <DescriptionText description={"Total Order"} figure={totalOrder} />

          <Button
            onPress={() => navigation.navigate("PaymentOptions")}
            title="Place Order"
            isFilled
          />
        </View>
      </Container>
    </View>
  );
}

function DescriptionText({
  description,
  figure,
  isCurrency,
}: DescriptionTextProps) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 30,
      }}
    >
      <Text style={{ color: "#797979", fontSize: 20 }}>{description}</Text>
      <Text style={{ color: "#797979", fontSize: 20 }}>
        {figure ? figure : "____"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
