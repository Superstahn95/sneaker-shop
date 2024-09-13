import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import OnboardingScreen from "../../screens/onboardng/Onboarding";
import WelcomeScreen from "../../screens/welcome/Welcome";
import SignUpScreen from "../../screens/auth/RegistrationOptions";

export type RootStackParamList = {
  Otp: { email: string; activationToken: string };
  Onboarding: undefined;
  Welcome: undefined;
  SignUp: undefined;
};

export type TabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  Profile: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
