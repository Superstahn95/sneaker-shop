import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import SingleOption from "./components/SingleOption";
import { payOptions } from "../../assets/data";
import { useState } from "react";
import { PaymentOptionScreenProps } from "../../navigation/stack/types";

export default function PaymentOptions({
  navigation,
}: PaymentOptionScreenProps) {
  const [currentOption, setcurrentOption] = useState("card");
  const handlePaymentNavgation = () => {
    console.log("route to the next screen");
    //to be changed
    navigation.navigate("OrderSuccess");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        {payOptions.map((i) => (
          <SingleOption
            image={i.image}
            option={i.option}
            key={i.option}
            selectedOption={currentOption}
            setNewOption={setcurrentOption}
            optionKeyWord={i.keyword}
          />
        ))}
        <View style={{ marginTop: 80 }}>
          <Button title="Proceed" isFilled onPress={handlePaymentNavgation} />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({});
