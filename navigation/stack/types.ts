import {
  NavigatorScreenParams,
  CompositeScreenProps,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

// when logged in, figure out a way to remove auth stack
export type AuthStackParamList = {
  Onboarding: undefined;
  Welcome: undefined;
  RegistrationOption: undefined; // for signup or sign in choice
  Otp: { email: string; activationToken: string }; // for email verification
  SignUp: { email: string };
  SecondSignUpScreen: {
    email: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    userName: string;
  };
  RegistrationSuccess: undefined;
};

export type TabBarParamList = {
  Home: undefined;
  Cart: undefined;
  Favourites: undefined;
  Profile: undefined;
};

export type ProductStackParamList = {
  Products: undefined;
  Product: { productId: string };
};

export type CartStackParamList = {
  Cart: undefined;
  Checkout: undefined;
};
// export type AppStackParamList = {
//   Home: undefined;
//   Search: undefined;
//   ProductStack: NavigatorScreenParams<ProductStackParamList>;
//   CartStack: NavigatorScreenParams<CartStackParamList>;
//   //   AuthStack: NavigatorScreenParams<AuthStackParamList>; // singled this out to a different stack
// };

export type AppStackParamList = {
  Tab: NavigatorScreenParams<TabBarParamList>;
  Product: { productId: string };
  Checkout: undefined;
};

export type OtpScreenProps = NativeStackScreenProps<AuthStackParamList, "Otp">;

export type SignUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "SignUp"
>;

export type SecondSignUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "SecondSignUpScreen"
>;

export type ProductScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ProductStackParamList, "Product">,
  BottomTabScreenProps<AppStackParamList>
>;

export type WelcomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "Welcome">,
  BottomTabScreenProps<AppStackParamList>
>;

export type RegistrationSuccessScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "RegistrationSuccess"
>;

// export type HomeScreenProps = BottomTabScreenProps<AppStackParamList, "Home">;
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Home">,
  NativeStackScreenProps<AppStackParamList>
>;
// export type ProductScreenProps = NativeStackScreenProps<AppStackParamList, "">
