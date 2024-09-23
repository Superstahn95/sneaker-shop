import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function ProductImagePreview() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/sneakers9.png")}
        style={styles.image}
      />
      <LinearGradient style={styles.sphere} colors={["#FFFFFF", "#666666"]}>
        {/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          What are we doing today??
        </Text> */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  sphere: {
    // width: width * 0.4,
    width: 150,
    height: 150,
    // height: width * 0.4,
    // borderRadius: (width * 0.4) / 2,
    borderRadius: 150 / 2,
    backgroundColor: "#C4C4C4",
    transform: [{ scaleX: 2.3 }],
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    // overflow: "visible",
    position: "relative",
  },
  image: {
    position: "absolute",
    bottom: 80,
    resizeMode: "cover",
    width: 400,
    height: 300,
    transform: [{ rotateZ: "-15deg" }],
    zIndex: 99,
  },
});
