// CustomText.js
import React, { useEffect } from "react";
import {
  PlayfairDisplay_400Regular,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import { Text } from "react-native";

export default function CustomText({ children, style, fontFamily, ...props }) {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    // Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null; // Return loading spinner if fonts are not loaded
  }

  return (
    <Text {...props} style={[style, { fontFamily }]}>
      {children}
    </Text>
  );
}
