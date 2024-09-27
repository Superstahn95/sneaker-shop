import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../../utils/colors";

interface RelatedProductCardProps {
  image: string;
  name: string;
  _id: string;
  gender: string;
  price: number;
}

export default function RelatedProductCard({
  _id,
  gender,
  image,
  name,
  price,
}: RelatedProductCardProps) {
  let shoeText: string;
  if (gender.toLowerCase() === "men") {
    shoeText = "men's shoes";
  } else if (gender.toLowerCase() == "women") {
    shoeText = "women's shoes";
  } else {
    shoeText = "unisex";
  }
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        borderStyle: "solid",

        overflow: "hidden",
      }}
    >
      <View
        style={{
          backgroundColor: "#F0F0F0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/images/sneakers2.png")}
          style={{ height: 200, width: 200, objectFit: "contain" }}
        />
      </View>
      <Text
        style={{ textTransform: "capitalize", marginTop: 10, color: "#696969" }}
      >
        {shoeText}
      </Text>
      <Text
        style={{
          textTransform: "capitalize",
          color: "#202020",
          marginBottom: 5,
        }}
      >
        {name}
      </Text>
      <Text style={{ color: Colors.primary, fontSize: 20 }}>${price}.00</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
