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

export type ProductStackParamList = {
  Products: undefined;
  Product: { productId: string };
};

export type CartStackParamList = {
  Cart: undefined;
  Checkout: undefined;
};
export type AppStackParamList = {
  Home: undefined;
  Search: undefined;
  ProductStack: NavigatorScreenParams<ProductStackParamList>;
  CartStack: NavigatorScreenParams<CartStackParamList>;
  //   AuthStack: NavigatorScreenParams<AuthStackParamList>; // singled this out to a different stack
};

// types for routes
// export type OtpScreenProps = CompositeScreenProps<
//   NativeStackScreenProps<AuthStackParamList, "Otp">,
//   BottomTabScreenProps<AppStackParamList>
// >;

export type OtpScreenProps = NativeStackScreenProps<AuthStackParamList, "Otp">;

// export type SignUpScreenProps = CompositeScreenProps<
//   NativeStackScreenProps<AuthStackParamList, "SignUp">,
//   BottomTabScreenProps<AppStackParamList>
// >;

export type SignUpScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "SignUp"
>;

// export type SecondSignUpScreenProps = CompositeScreenProps<
//   NativeStackScreenProps<AuthStackParamList, "SecondSignUpScreen">,
//   NativeStackScreenProps<AppStackParamList>
// >;

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

// export type RegistrationSuccessScreenProps = CompositeScreenProps<
//   NativeStackScreenProps<AuthStackParamList, "RegistrationSuccess">,
//   BottomTabScreenProps<AppStackParamList>
// >;

export type RegistrationSuccessScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "RegistrationSuccess"
>;

export type HomeScreenProps = BottomTabScreenProps<AppStackParamList, "Home">;
