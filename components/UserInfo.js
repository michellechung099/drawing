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
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={styles.input}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Full name"
            // keyboardType="email-address"
          />
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={styles.input}
            onChangeText={(text) => setBirthDate(text)}
            value={birthDate}
            placeholder="Birth date"
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
    justifyContent: "center",
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
    marginBottom: 15,
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
