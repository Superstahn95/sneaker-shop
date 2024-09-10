import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../../screens/onboardng/Onboarding";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
