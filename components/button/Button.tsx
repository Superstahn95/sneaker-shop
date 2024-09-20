import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/colors";

type ButtonProps = {
  title: string;
  isFilled?: boolean;
  optionalTextColor?: string;
  optionalBorderColor?: string;
  onPress: () => void;
};
// 696969
// D7D7D7
export default function Button({
  title,
  onPress,
  optionalTextColor,
  optionalBorderColor = "#D7D7D7",
  isFilled = false,
}: ButtonProps) {
  const backgroundColor = isFilled ? Colors.primary : "transparent";
  const textColor = isFilled ? "white" : Colors.primary;
  let newTextColor: string;
  let borderColor: string;
  if (isFilled) {
    newTextColor = "white";
    borderColor = Colors.primary;
  } else if (optionalTextColor) {
    newTextColor = optionalTextColor;
    borderColor = optionalBorderColor;
  } else {
    newTextColor = Colors.primary;
    borderColor = Colors.primary;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor, borderColor }]}
    >
      <Text style={[styles.buttonText, { color: newTextColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 54, //make this responsive
    width: "100%",
    borderRadius: 8,
    // borderColor: Colors.primary,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "semibold",
    textTransform: "capitalize",
  },
});
