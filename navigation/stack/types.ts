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

export type CartStackParamList = {
  Cart: undefined;
  Checkout: undefined;
};

export type AppStackParamList = {
  Tab: NavigatorScreenParams<TabBarParamList>;
  Product: { productId: string };
  Checkout: undefined;
  Shipping: undefined;
  PaymentOptions: undefined;
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

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "Welcome"
>;
export type RegistrationSuccessScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "RegistrationSuccess"
>;

export type ProductStackParamList = {
  Products: undefined;
  Product: { productId: string };
};

export type ProductScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "Product"
>;

export type CheckOutScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "Checkout"
>;

export type CartScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Cart">,
  NativeStackScreenProps<AppStackParamList>
>;
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Home">,
  NativeStackScreenProps<AppStackParamList>
>;

export type FavouritesScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Favourites">,
  NativeStackScreenProps<AppStackParamList>
>;

export type ProfileScreenProp = CompositeScreenProps<
  BottomTabScreenProps<TabBarParamList, "Profile">,
  NativeStackScreenProps<AppStackParamList>
>;

export type ShippingDetailsScreenProp = NativeStackScreenProps<
  AppStackParamList,
  "Shipping"
>;

export type PaymentOptionScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "PaymentOptions"
>;
