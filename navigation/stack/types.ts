import { NavigatorScreenParams } from "@react-navigation/native";

// when logged in, figure out a way to remove auth stack
export type AuthStackParamList = {
  Onboarding: undefined;
  Welcome: undefined;
  RegistrationOption: undefined; // for signup or sign in choice
  Otp: { email: string; activationToken: string }; // for email verification
  SignUp: { email: string };
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
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};
