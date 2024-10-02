import { StyleSheet, Text, View, Image } from "react-native";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import ColoredText from "../../components/text/ColoredText";
import { OrderSuccessScreenProps } from "../../navigation/stack/types";

export default function OrderSucess({ navigation }: OrderSuccessScreenProps) {
  // trackingId should be passed into this component and from the route parameters
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Container>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../../assets/images/success.png")} />
          <View style={{ marginTop: 50 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
            >
              Thank You For Your Purchase
            </Text>
            <Text
              style={{
                marginTop: 20,
                textAlign: "center",
                color: "#7E7E7E",
                fontSize: 16,
              }}
            >
              Your new sneakers are on their way to you! We're excited for you
              to receive your Adidas Adistar Cushion
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>
              Tracking ID: <ColoredText text={"#12345"} fontSize={20} />{" "}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Button
            onPress={() => console.log("navigate to home page")}
            title="Back to Home"
            isFilled
          />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({});
