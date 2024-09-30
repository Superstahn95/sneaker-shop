import { useState } from "react";
import { View, ScrollView } from "react-native";
import Container from "../../components/container/Container";
import { ShippingDetailsScreenProp } from "../../navigation/stack/types";
import CustomInput from "../../components/form/CustomInput";
import Button from "../../components/button/Button";

export default function CheckoutScreen({
  navigation,
}: ShippingDetailsScreenProp) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <CustomInput
            label={"Email Address"}
            isRequired={true}
            setValue={setEmail}
          />
          <CustomInput
            label={"First Name"}
            isRequired={true}
            setValue={setFirstName}
          />
          <CustomInput
            label={"Last Name"}
            isRequired={true}
            setValue={setLastName}
          />
          <CustomInput
            label={"Street Address"}
            isRequired={true}
            setValue={setStreetAddress}
          />
          {/* to be replaced with a country state city dropdown */}
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              // width: "100%",
            }}
          >
            <CustomInput label={"City"} isRequired={true} setValue={setCity} />
            <CustomInput
              label={"Postal Code"}
              isRequired={true}
              setValue={setPostalCode}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              // width: "100%",
            }}
          >
            <CustomInput label={"City"} isRequired={true} setValue={setCity} />
            <CustomInput
              label={"Postal Code"}
              isRequired={true}
              setValue={setPostalCode}
            />
          </View>
          <CustomInput
            label={"Phone Number"}
            isRequired={true}
            setValue={setPhoneNumber}
          />
        </Container>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,

          right: 0,
          left: 0,
        }}
      >
        <Container>
          <Button
            onPress={() => navigation.navigate("Checkout")}
            title="Next"
            isFilled
          />
        </Container>
      </View>
    </View>
  );
}
