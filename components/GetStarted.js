import { StyleSheet, Text, View } from "react-native";
import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

// import CustomText from "./CustomText";
import Button from "./Button";
import BackgroundScreen from "./BackgroundScreen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function GetStarted({ navigation }) {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Return loading spinner if fonts are not loaded
  }

  return (
    <View style={styles.container}>
      <BackgroundScreen />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text
            style={[styles.logo, { fontFamily: "PlayfairDisplay_700Bold" }]}
          >
            Reconnect with yourself
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            label="Create an account"
            gradient={true}
            style={{ fontFamily: "Poppins_600SemiBold" }}
            onPress={() => navigation.navigate("Email")}
          />
          <Button
            label="Sign in"
            gradient={false}
            style={{ fontFamily: "Poppins_600SemiBold" }}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flex: 1,
    top: "43%",
    width: "90%",
  },
  logo: {
    color: "#FFFFFF",
    fontStyle: "normal",
    textAlign: "center",
    fontSize: "38",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
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
