import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "../../../components/productCard/ProductCard";
import { products } from "../../../assets/data";
import { HomeScreenProps } from "../../../navigation/stack/types";
import { useNavigation } from "@react-navigation/native";

// type ProductsProp = {
//     navigation : BottomTabNavigationProp<AppStackParamList, "Home", undefined>
// }

export default function Products() {
  const { navigation } = useNavigation<HomeScreenProps>();
  // navigation.navigate("ProductStack",{params: {}})
  return (
    <View style={{ marginTop: 14, flex: 1 }}>
      {/* <Text>Products</Text> */}
      <FlatList
        data={products}
        // style={{ marginBottom: 200 }}
        // key={Math.ceil(products.length / 2) ?? 4}
        // keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => (
          <ProductCard
            image={item.image}
            gender={item.gender}
            price={item.price}
            description={item.description}
            name={item.name}
            index={index}
            _id={item._id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    // justifyContent: "space-between", // Align items with equal spacing
  },
});
