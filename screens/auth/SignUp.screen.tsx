import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LogoText from "../../components/logo/LogoText";
import CustomInput from "../../components/form/CustomInput";
import Button from "../../components/button/Button";
import ViewWrapper from "../../components/wrapper/ViewWrapper";
import ColoredText from "../../components/text/ColoredText";
import GoogleButton from "./components/GoogleButton";

export default function SignUpScreen() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const handleSubmit = async () => {
    if (!email) {
      // send back an error
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://172.20.10.5:8080/api/v1/auth/verify-email",
        { email }
      );
      console.log(data);
      // await AsyncStorage.setItem("token", data.activationToken);
      //send a toastify
      //push to email verifcation
      //@ts-ignore
      navigation.navigate("VerifyEmail");
    } catch (error) {
      console.log(error);
      //get an error message here
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ marginVertical: 50 }}>
          <Text style={styles.directionText}>
            Type your e-mail or phone number to create an account with{" "}
            <LogoText />{" "}
          </Text>
        </View>
        <ViewWrapper>
          <CustomInput
            label="Email Address"
            isRequired={true}
            setValue={setEmail}
          />
        </ViewWrapper>

        <ViewWrapper>
          <View style={{ marginVertical: 72 }}>
            <Button
              title={loading ? "loading" : "sign up"}
              onPress={handleSubmit}
              isFilled
            />
            <Text style={styles.terms}>
              By signing up you agree to <LogoText fontSize={16}>'s</LogoText>{" "}
            </Text>
            {/* <Text style={styles.terms}>Terms and Conditions</Text> */}
            <ColoredText text="Terms and Conditions" fontSize={16} isRuled />
          </View>
        </ViewWrapper>

        <ViewWrapper grow>
          {/* <Button
            title="sign in with google"
            onPress={() => console.log("google sign in")}
          /> */}
          <GoogleButton />
          <Button
            title="sign in with apple"
            onPress={() => console.log("apple sign in")}
          />
        </ViewWrapper>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  directionText: {
    fontSize: 20,
    textAlign: "center",
  },
  terms: {
    width: "80%",
    textAlign: "center",
    marginHorizontal: "auto",
  },
});
