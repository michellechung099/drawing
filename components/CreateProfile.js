import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import Button from "./Button";
import { useState } from "react";

export default function CreateProfile({ navigation }) {
  const [username, setUsername] = useState("");
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
            Create your profile
          </Text>
          <View style={styles.profileContainer}>
            <View style={styles.circle}>
              <View style={styles.userCircle}>
                <Image source={require("../assets/User.png")} />
              </View>
              <Image
                source={require("../assets/Plus.png")}
                style={styles.plusIcon}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              style={[styles.input, focus === "username" && styles.focusInput]}
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Username"
              onFocus={() => setFocus("username")}
              onBlur={() => setFocus(null)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label="Create account"
            gradient={true}
            onPress={() => navigation.navigate("Profile")}
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
    justifyContent: "space-between",
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    paddingTop: 55,
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
    alignItems: "center",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15,
  },
  profileContainer: {
    position: "relative",
  },
  circle: {
    width: 160,
    height: 160,
    backgroundColor: "#2E2E2E",
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  plusIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    objectFit: "cover",
    width: 50,
    height: 50,
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
  inputContainer: {
    width: "100%",
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
