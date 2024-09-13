import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ColoredText from "../../../components/text/ColoredText";
import { Colors } from "../../../utils/colors";

interface ItemProps {
  percentageDiscount: number;
  _id: string;
  image: string;
}
const { width } = Dimensions.get("window");
export default function PromoCarouselItem(item: ItemProps) {
  return (
    // <View style={{ width: "100%", backgroundColor: "green", marginRight: 10 }}>
    <LinearGradient
      colors={["#FF5B00", "#384450"]}
      style={styles.background}
      start={{ x: 0.03, y: 0.01 }}
    >
      <View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.promoText}>get discount</Text>
          <Text style={styles.promoText}>
            up to{" "}
            <ColoredText text={item.percentageDiscount + "%"} fontSize={20} />
          </Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.buttonText}>Explore more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  background: {
    margin: "auto",
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    borderRadius: 12,
    // padding: 20,
    height: 190, //fix this without giving it a fixed height
  },
  promoText: {
    fontSize: 20,
    fontWeight: "semibold",
    // color: "white",
    color: "black",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  exploreButton: {
    backgroundColor: Colors.primary,
    width: 112,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 14,
  },
  buttonText: {
    color: "white",
  },
});
