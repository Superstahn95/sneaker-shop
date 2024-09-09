import { StyleSheet, Text, View } from "react-native";
import GoogleButton from "./components/GoogleButton";
import AppleButton from "./components/AppleButton";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <GoogleButton />
      <AppleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
