import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../../utils/colors";

interface CartItemProps {
  color: string;
  brand?: string;
  quantity: number;
  size: number;
  image: string;
  price: number;
}

function ItemTextTemplate({
  category,
  details,
}: {
  category: string;
  details: string | number;
}) {
  return (
    <Text
      style={{
        color: "#696969",
        fontSize: 16,
        textTransform: "capitalize",
      }}
    >
      {category}:{" "}
      <Text
        style={{
          color: "#202020",
          // fontWeight: "bold",
        }}
      >
        {details}
      </Text>
    </Text>
  );
}

export default function CartItem({
  brand = "puma",
  color,
  image,
  quantity,
  size,
  price,
}: CartItemProps) {
  return (
    <View style={styles.itemContainer}>
      <View
        style={{
          // width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0F0F0",
          width: 150,
          borderRadius: 10,
          // height: 150,
        }}
      >
        <Image
          style={{
            width: 200,
            height: 150,
            marginRight: 30,
            objectFit: "contain",
            transform: [{ rotateZ: "-30deg" }],
          }}
          source={require("../../../assets/images/sneakers9.png")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ItemTextTemplate category="color" details={color} />
        <ItemTextTemplate category="brand" details={brand} />
        <ItemTextTemplate category="number of item" details={quantity} />
        <ItemTextTemplate category="size" details={size} />
        <Text
          style={{
            color: Colors.primary,
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          ${price}.00
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 10,
  },
  imageHolder: {},
});
