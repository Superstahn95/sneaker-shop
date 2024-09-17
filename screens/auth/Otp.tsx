import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SetStateAction, useState } from "react";
import LogoText from "../../components/logo/LogoText";
import Button from "../../components/button/Button";
import ViewWrapper from "../../components/wrapper/ViewWrapper";
import ColoredText from "../../components/text/ColoredText";
import OtpField from "../../components/otp/OtpField";
import { OtpScreenProps } from "../../navigation/stack/types";

interface VerifyCodeType {
  activationCode: string;
  activationToken: string;
  email: string;
}
const { height } = Dimensions.get("window");

export default function OTP({ navigation, route }: OtpScreenProps) {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  //   const route = useRoute<OtpScreenProps>()
  //email from passed params from the previous screen
  const { activationToken, email } = route.params;

  const verifyCode = async () => {
    setLoading(true);
    const activationCode = code.join("");
    try {
      const { data } = await axios.post(
        "http://172.20.10.5:8080/api/v1/auth/verify-code",
        { email, activationToken, activationCode }
      );
      console.log(data);
      //if data is gotten, we should be pushed to the screen to enter personal details
      //throw an email verified succesfully toast
      navigation.navigate("SignUp", { email });
      //   router.push({
      //     pathname: "/(routes)/personal-details",
      //     params: { email, activationCode, activationToken },
      //   });
    } catch (error) {
      //structure returned error
      console.log(error);
      //toast an error when something goes wrong
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1, width: "100%" }}>
        <View style={styles.container}>
          <View style={{ marginVertical: 70 }}>
            <LogoText fontSize={24} />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.verifyBoldText}>Verify your email address</Text>
            <Text style={styles.verificationText}>
              We have sent a verification code to
            </Text>
            {/* probably format email to shorten very long mails */}
            <Text style={styles.verificationText}>{email}</Text>
          </View>
          <View style={{ width: "90%" }}>
            {/* Otp input should be here */}
            <ViewWrapper>
              <OtpField
                code={code}
                setCode={setCode}
                setIsButtonDisabled={setIsButtonDisabled}
              />
              <Button
                title={loading ? "processing" : "submit"}
                onPress={verifyCode}
                isFilled
              />
            </ViewWrapper>
          </View>
          {/* request for another code sent */}
          <Text style={styles.requestText}>
            Didn't receive the verification code? it could take a bit of time,
            request a new code in <ColoredText text="20 seconds" fontSize={0} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    // justifyContent: "space-around",
    alignItems: "center",
  },
  verifyBoldText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
    textAlign: "center",
    color: "#202020",
  },
  verificationText: {
    textAlign: "center",
    fontSize: 16,
    color: "#202020",
  },
  requestText: {
    color: "#696969",
    fontSize: 14,
    textAlign: "center",
    width: "85%",
    // paddingHorizontal: 10,
    marginTop: 30,
    lineHeight: 20,
  },
});
