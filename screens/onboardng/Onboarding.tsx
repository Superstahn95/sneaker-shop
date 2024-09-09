import { StyleSheet, Text, View, Alert } from "react-native";
import LogoText from "../../components/logo/LogoText";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <LogoText fontSize={48} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
