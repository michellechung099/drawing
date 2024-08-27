import { View, Text, StyleSheet, Image } from "react-native";
import Button from "./Button";

const UploadPhoto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { fontFamily: "PlayfairDisplay_700Bold" }]}>
          Let's draw!
        </Text>
        <Text
          style={[styles.description, { fontFamily: "Poppins_400Regular" }]}
        >
          Use your own picture or find one in the photo library below to get
          started!
        </Text>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/ImagesSquare.png")} />
        </View>
        <Button label="Upload a picture" gradient={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  header: {
    alignItems: "center",
    gap: 16,
    height: 553,
    paddingTop: 64,
    paddingRight: 16,
    paddingLeft: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 24,
  },
  description: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 16,
    lineHeight: 22.4,
  },
  imageContainer: {
    backgroundColor: "#2E2E2E",
    borderRadius: 10,
    width: 361,
    height: 329,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadPhoto;
