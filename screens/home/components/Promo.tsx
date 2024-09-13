import { StyleSheet, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import PromoCarouselItem from "./PromoCarouselItem";
import { discountItems } from "../../../assets/data";

const { width } = Dimensions.get("screen");

export default function Promo() {
  return (
    <View style={styles.promoContainer}>
      <Carousel
        loop
        style={{ width: "100%", height: "100%", borderRadius: 12 }}
        pagingEnabled
        width={width}
        // height={width / 2}
        autoPlay={true}
        data={discountItems}
        scrollAnimationDuration={3000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index, item }) => (
          <PromoCarouselItem
            percentageDiscount={item.percentageDiscount}
            _id={item._id}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  promoContainer: {
    borderRadius: 12,
    // borderWidth: 1,
    // borderColor: "red",
    // borderStyle: "solid",
    flex: 1,
  },
  carouselContainer: {
    borderRadius: 12,
  },
});
