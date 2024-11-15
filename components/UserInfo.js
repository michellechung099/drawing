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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

export default function UserInfo({ route, navigation }) {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [focus, setFocus] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleNext = () => {
    if (fullName && birthDate) {
      navigation.navigate("CreateProfile", {
        email: route.params.email,
        password: route.params.password,
        fullName: fullName,
        birthDate: birthDate,
      });
    } else {
      alert("Please fill out all the fields");
    }
  };

  const showDatePicker = () => {
    setFocus("birthDate");
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = format(date, "MM/dd/yyyy");
    setBirthDate(formattedDate);
    hideDatePicker();
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
          />
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={[styles.input, focus === "birthDate" && styles.focusInput]}
            onChangeText={(text) => setBirthDate(text)}
            value={birthDate}
            placeholder="Birth date"
            onFocus={showDatePicker}
            onBlur={() => setFocus(null)}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
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
    backgroundColor: "#000000",
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
    gap: "120%",
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
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
