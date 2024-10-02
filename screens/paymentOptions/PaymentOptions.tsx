import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import SingleOption from "./components/SingleOption";
import { payOptions } from "../../assets/data";
import { useState } from "react";

export default function PaymentOptions() {
  const [currentOption, setcurrentOption] = useState("card");
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
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({});
