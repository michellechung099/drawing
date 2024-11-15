import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Button from "./Button";
import { useState } from "react";
import { auth } from "../firebase";

export default function Email({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState(null);

  const handleNext = () => {
    // add email validation logic (having "@" and in correct format)
    // also check if email is already being used or not (validation) not when account is being created
    // password validation in backend
    if (email && password) {
      navigation.navigate("UserInfo", {
        email: email,
        password: password,
      });
    } else {
      alert("Please fill out all the fields");
    }
  };

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
            What's your email?
          </Text>
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={[styles.input, focus === "email" && styles.focusInput]}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            keyboardType="default"
            autoCapitalize="none"
            onFocus={() => setFocus("email")}
            onBlur={() => setFocus(null)}
          />
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={[styles.input, focus === "password" && styles.focusInput]}
            onChangeText={(text) => setPassword(text)}
            value={password}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={true}
            keyboardType="default"
            textContentType="newPassword"
            onFocus={() => setFocus("password")}
            onBlur={() => setFocus(null)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button label="Next" gradient={true} onPress={handleNext} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  inner: {
    flex: 1,
  },
  header: {
    flex: 1,
    gap: 8,
    paddingTop: 64,
    paddingBottom: 0,
    paddingRight: 16,
    paddingLeft: 16,
  },
  title: {
    width: "100%",
    height: 24,
    fontSize: 24,
    lineHeight: 24,
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
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
    marginBottom: 16,
    padding: 16,
    left: 0,
    right: 0,
    position: "absolute",
    bottom: 0,
  },
});
