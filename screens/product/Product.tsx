import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Container from "../../components/container/Container";
import { Colors } from "../../utils/colors";
import { ProductScreenProps } from "../../navigation/stack/types";
import { products } from "../../assets/data";
import SizeSelection from "./components/SizeSelection";
import ColorSelection from "./components/ColorSelection";
import ProductImagePreview from "./components/ProductImagePreview";

const imagesArray = [
  require("../../assets/images/sneakers3.png"),
  require("../../assets/images/sneakers2.png"),
  require("../../assets/images/sneakers3.png"),
  require("../../assets/images/sneakers5.png"),
];

interface ProductType {
  _id: string;
  image: string;
  gender: string;
  price: number;
  name: string;
  description: string;
}

const numberArray = [33, 34, 35, 36, 40, 42, 43];
const colorsArray = ["red", "blue", "green", "orange", "pink"];

export default function ProductScreen({ route }: ProductScreenProps) {
  // const { id } = useLocalSearchParams();
  const { productId } = route.params;
  const [loading, setLoading] = useState<Boolean>(false);
  const [product, setProduct] = useState<ProductType | null>(null);
  // default selectedSize should be the smallest available size in our array of numbers
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setProduct(products.filter((product) => product._id === productId)[0]);
    setSelectedSize(numberArray[0]);
    setSelectedColor(colorsArray[0]);
  }, [productId]);

  return (
    <ScrollView>
      <Container>
        <View style={styles.container}>
          {/* image holder component */}
          <ProductImagePreview />
          {/* details container */}
          <View>
            <Text style={styles.name}>{product?.name}</Text>
            <Text style={styles.description}>{product?.description}</Text>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 20,
                fontWeight: "semibold",
              }}
            >
              ${product?.price}
            </Text>
          </View>
          {/* sneakers images gallery */}
          <FlatList
            style={{
              width: "100%",
              marginTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={imagesArray}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            renderItem={({ item }) => (
              //   <View style={{ backgroundColor: "yellow",height: "auto" }}>
              <Image source={item} style={{ width: 75, height: 50 }} />
              //   </View>
            )}
          />

          {/* size selection => we need to get the minimum and maximum available size */}
          <View style={{ marginTop: 8, width: "100%" }}>
            <Text style={{ color: "#7E7E7E", fontSize: 16 }}>Select Size</Text>
            <SizeSelection
              sizes={numberArray}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </View>
          <View style={{ width: "100%", marginVertical: 20 }}>
            <ColorSelection
              colors={colorsArray}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </View>
        </View>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: Colors.primary,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginBottom: 10,
  },
});
