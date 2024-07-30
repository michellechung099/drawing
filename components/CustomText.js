// CustomText.js
import React, { useEffect } from "react";
import { Text } from "react-native";
import {
  useFonts,
  PlayfairDisplay_400Regular,
} from "@expo-google-fonts/playfair-display";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function CustomText(props) {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "PlayfairDisplay_400Regular" }]}
    />
  );
}
