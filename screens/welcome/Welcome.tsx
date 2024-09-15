import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Colors } from "../../utils/colors";
import LogoText from "../../components/logo/LogoText";
import Button from "../../components/button/Button";
import { WelcomeScreenProps } from "../../navigation/stack/types";

export default function WelcomeScreen({
  navigation,
  route,
}: WelcomeScreenProps) {
  const goToSignUp = () => {
    navigation.navigate("RegistrationOption");
  };
  const goToLogin = () => {
    // navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Ist item */}
      <View>
        <Text style={styles.welcomeText}>
          Welcome to <LogoText>!</LogoText>
        </Text>
      </View>
      {/* second item */}
      <View>
        <Image source={require("../../assets/images/welcome-sneakers.png")} />
      </View>
      {/* third item */}
      <View>
        <Text style={styles.introText}>
          Level up your sneaker game! Browse the latest drops, limited editions,
          and top brands all in the KickHub app
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button title={"get started"} isFilled={true} onPress={goToSignUp} />
        <Button title={"sign in"} onPress={goToLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 24,
  },
  secondaryText: {
    color: Colors.secondary,
  },
  coloredText: {
    color: Colors.primary,
  },

  introText: {
    fontSize: 18,
    color: "#202020",
    textAlign: "center",
    padding: 20,
  },
  buttonsWrapper: {
    width: "90%",
    marginBottom: 30,
  },
});
