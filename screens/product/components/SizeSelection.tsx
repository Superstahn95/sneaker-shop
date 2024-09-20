import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../../utils/colors";

interface SizeSelectProps {
  sizes: number[];
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
}
interface SizeBoxProps {
  size: number;
  selectedSize: number | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function SizeSelection({
  sizes,
  selectedSize,
  setSelectedSize,
}: SizeSelectProps) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sizes}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <SizeBox
            size={item}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        )}
      />
    </View>
  );
}

function SizeBox({ size, selectedSize, setSelectedSize }: SizeBoxProps) {
  return (
    <TouchableOpacity
      style={[
        styles.box,
        {
          borderWidth: size === selectedSize ? 1 : 0,
          borderColor: Colors.primary,
          borderStyle: "solid",
        },
      ]}
      onPress={() => setSelectedSize(size)}
    >
      <Text
        style={[
          styles.boxText,
          { color: size === selectedSize ? Colors.primary : "#202020" },
        ]}
      >
        {size}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  box: {
    width: 50,
    height: 50, //maybe this figure should change
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  boxClicked: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.primary,
  },
  boxText: {
    color: "#202020",
  },
  textClicked: {
    color: Colors.primary,
  },
});
