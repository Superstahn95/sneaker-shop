import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Google from "expo-auth-session/providers/google"

export default function GoogleButton() {
    const [response, promptAsync] = Google.useAuthRequest()
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => console.log("trigger google sign in")}
    >
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderColor: "orange",
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
  },
  buttonText: {
    fontSize: 24,
    textTransform: "capitalize",
  },
});
