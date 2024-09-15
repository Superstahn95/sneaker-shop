import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import LogoText from "../../components/logo/LogoText";
import Container from "../../components/container/Container";
import { HomeScreenProps } from "../../navigation/stack/types";
import Promo from "./components/Promo";
import SearchField from "../../components/searchField/SearchField";
import Categories from "./components/Categories";
import Products from "./components/Products";

// make a custom container responsible for handling padding across screens
export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <LogoText fontSize={24} />
        {/* search field */}
        <View style={styles.searchContainer}>
          <SearchField />
          <TouchableOpacity style={styles.filterContainer}>
            <Image source={require("../../assets/images/filter.png")} />
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            height: "30%",
            marginVertical: 19,
            overflow: "hidden",
          }}
        >
          <Promo />
        </View> */}
        {/* categories */}
        <Categories />
        {/* products */}
        <Products />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  filterContainer: {
    borderRadius: 8,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderStyle: "solid",
    height: 54,
    width: 54,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 39,
  },
});
