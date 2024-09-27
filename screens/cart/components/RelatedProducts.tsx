import { StyleSheet, Text, View, FlatList } from "react-native";
import RelatedProductCard from "./RelatedProductCard";
import { products } from "../../../assets/data";

interface RelatedProductsProps {
  category: string;
}

export default function RelatedProducts({ category }: RelatedProductsProps) {
  // function should fetch products belonging to similar category from the backeend and display them in the ui
  return (
    <View style={{ marginVertical: 60 }}>
      <Text style={{ fontWeight: "semibold", marginBottom: 10, fontSize: 20 }}>
        You Might Also Like
      </Text>
      {/* flatlist of related items */}
      <FlatList
        horizontal
        data={products}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        renderItem={({ item }) => (
          <RelatedProductCard
            _id={item._id}
            gender={item.gender}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
