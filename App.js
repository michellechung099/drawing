import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Drawing</Text>
      </View>
      <View style={styles.footContainer}>
        <Button label="Sign Up" />
        <Button label="Log In" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  header: {
    height: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "#1C1C1C",
    fontWeight: "700",
    fontSize: 50,
    fontStyle: "normal",
  },
  footContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 100,
  },
});
