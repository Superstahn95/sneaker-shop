import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface ColorSelectionProps {
  colors: string[];
  selectedColor: string | null;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ColorBoxProps {
  bgColor: string;
  selectedColor: string | null;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ColorSelection({
  colors,
  selectedColor,
  setSelectedColor,
}: ColorSelectionProps) {
  return (
    <View>
      <Text style={styles.title}>Pick color</Text>
      <FlatList
        style={{ marginVertical: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={colors}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <ColorBox
            bgColor={item}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        )}
      />
    </View>
  );
}
function ColorBox({ bgColor, selectedColor, setSelectedColor }: ColorBoxProps) {
  return (
    <TouchableOpacity
      onPress={() => setSelectedColor(bgColor)}
      style={[
        styles.colorCircle,
        {
          backgroundColor: bgColor,
          borderStyle: "solid",
          borderColor: "white",
          borderWidth: selectedColor === bgColor ? 3 : 0,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#202020",
    fontSize: 16,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 1000,
  },
});
