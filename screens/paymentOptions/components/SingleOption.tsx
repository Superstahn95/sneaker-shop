import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../../utils/colors";

interface SingleOptionProp {
  option: string;
  image: any;
  optionKeyWord: string;
  selectedOption: string;
  setNewOption: React.Dispatch<React.SetStateAction<string>>;
}

export default function SingleOption({
  image,
  option,
  optionKeyWord,
  selectedOption,
  setNewOption,
}: SingleOptionProp) {
  return (
    <TouchableOpacity
      onPress={() => setNewOption(optionKeyWord)}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 66,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 1000,
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            backgroundColor:
              selectedOption === optionKeyWord ? Colors.primary : "transparent",
          }}
        />
        <Text style={{ color: "#696969", fontSize: 18 }}>{option}</Text>
      </View>
      <View
        style={{
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          borderRadius: 4,
          //   borderStyle: "solid",
          //   borderColor: "black",
          //   borderWidth: 1,
          elevation: 14,
        }}
      >
        <Image source={image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
