import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

//make this dynamic
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
  },
});
