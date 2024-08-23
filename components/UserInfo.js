import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import Button from "./Button";
import { useState } from "react";

export default function UserInfo({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [focus, setFocus] = useState(null);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 75 : 0}
    >
      <View style={styles.inner}>
        <View style={styles.header}>
          <Text
            style={[styles.title, { fontFamily: "PlayfairDisplay_700Bold" }]}
          >
            Some basic information
          </Text>
          <Text style={[styles.subTitle, { fontFamily: "Poppins_400" }]}>
            This information below is for your security, it will not be public.
          </Text>
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={[styles.input, focus === "fullName" && styles.focusInput]}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Full name"
            onFocus={() => setFocus("fullName")}
            onBlur={() => setFocus(null)}
            // keyboardType="email-address"
          />
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={[styles.input, focus === "birthDate" && styles.focusInput]}
            onChangeText={(text) => setBirthDate(text)}
            value={birthDate}
            placeholder="Birth date"
            onFocus={() => setFocus("birthDate")}
            onBlur={() => setFocus(null)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label="Next"
            gradient={true}
            onPress={() => navigation.navigate("CreateProfile")}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
    gap: "120%",
    // padding: 25,
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 8,
    paddingTop: 64,
    paddingBottom: 0,
    paddingRight: 16,
    paddingLeft: 16,
    // 64px, 16px, 0px, 16px
  },
  title: {
    width: "100%",
    height: 24,
    fontSize: 24,
    lineHeight: 24,
    color: "#FFFFFF",
    alignItems: "center",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 12,
    lineHeight: 19.2,
    textAlign: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  input: {
    padding: "10 16 10 16",
    color: "#FFFFFF",
    height: 55,
    borderRadius: 10,
    backgroundColor: "#2A2A2A",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "transparent",
  },
  focusInput: {
    borderColor: "#FFFFFF",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    paddingTop: 0,
    paddingBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
});
