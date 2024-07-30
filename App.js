import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  PlayfairDisplay_400Regular,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import * as SplashScreen from "expo-splash-screen";

import CustomText from "./components/CustomText";
import Button from "./components/Button";
import Onboarding from "./components/Onboarding";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      <Onboarding />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <CustomText style={styles.logo}>Reconnect with nature</CustomText>
        </View>
        <View style={styles.buttonContainer}>
          <Button label="Create an account" gradient={true} />
          <Button label="Sign In" gradient={false} />
        </View>
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
    marginTop: "95%",
  },
  logo: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    fontSize: "xxx-large",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "60%",
    paddingTop: 0,
    paddingRight: 16,
    paddingBottom: 48,
    paddingLeft: 16,
    margin: 8,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
