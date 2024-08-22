import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import GetStarted from "./components/GetStarted";

export default function App() {
  return (
    <View style={styles.container}>
      <GetStarted />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
