import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function QuantityController() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 100,
      }}
    >
      <Text>Quantity</Text>
      <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
        <TouchableOpacity>
          {/* <Text style={styles.controlsText}>-</Text> */}
          <View style={{ width: 20, height: 1, backgroundColor: "black" }} />
        </TouchableOpacity>
        <Text style={[styles.controlsText, { fontWeight: "bold" }]}>1</Text>
        <TouchableOpacity>
          <Text style={styles.controlsText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controlsText: {
    fontSize: 18,
  },
});
