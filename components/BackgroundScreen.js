import { StyleSheet, View, Image } from "react-native";

backgroundImage = require("../assets/onboarding-screen.jpeg");

export default function BackgroundScreen() {
  return (
    // create two buttons: "Create an account", "Sign in"
    // import background image
    <View style={styles.imageContainer}>
      <Image source={backgroundImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // position: "absolute",
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
