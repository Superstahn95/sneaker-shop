import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import OnboardingScreen from "../../screens/onboardng/Onboarding";
import WelcomeScreen from "../../screens/welcome/Welcome";
import RegistrationOptionsScreen from "../../screens/auth/RegistrationOptions";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegistrationOption"
        component={RegistrationOptionsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
