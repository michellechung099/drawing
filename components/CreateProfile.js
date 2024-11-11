import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { auth, db } from "../firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateProfile({ route, navigation }) {
  const [username, setUsername] = useState("");
  const [focus, setFocus] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  // save this image under this user in Firebae

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status == "granted");
    })();
  }, []);

  if (hasGalleryPermission === false) {
    Alert.alert("No permission to photo gallery");
  }

  const handleCreateProfile = async () => {
    if (username) {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          route.params.email,
          route.params.password
        );
        const uid = userCredentials.user.uid;

        await setDoc(doc(db, "users", uid), {
          fullName: route.params.fullName,
          birthDate: route.params.birthDate,
          username: username,
        });
        navigation.replace("TabNavigator");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please provide a username");
    }
  };

  const handlePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("result", result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
            Create your profile
          </Text>
          <View style={styles.profileContainer}>
            <View style={styles.circle}>
              <View style={styles.userCircle}>
                <Image
                  source={
                    image ? { uri: image } : require("../assets/User.png")
                  }
                  style={image ? styles.profileImage : styles.profileIcon}
                />
              </View>
              <TouchableOpacity onPress={handlePress} style={styles.plusIcon}>
                <Image source={require("../assets/Plus.png")} />
              </TouchableOpacity>
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
            onPress={handleCreateProfile}
          />
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
  userCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    resizeMode: "cover",
  },
  // bigger icon flashes when profileImage is set. Fix
  profileIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    top: "23%",
    left: "25%",
    resizeMode: "cover",
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
});
