import { StyleSheet, Text, View, Alert } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LogoText from "../../components/logo/LogoText";

export default function OnboardingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    //navigate to another screen
    setTimeout(() => {
      //check on this later
      //@ts-ignore
      navigation.navigate("Welcome");
    }, 3000);
  }, []);
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
