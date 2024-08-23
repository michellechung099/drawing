import { StyleSheet, Text, View, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text
            style={[styles.title, { fontFamily: "PlayfairDisplay_700Bold" }]}
          >
            Your Profile
          </Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.circle}>
            <View style={styles.userCircle}>
              <Image source={require("../assets/User.png")} />
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[styles.username, { fontFamily: "Poppins_600SemiBold" }]}
          >
            justinbear.ie
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    alignItems: "center",
  },
  title: {
    top: 48,
    color: "#FFFFFF",
    fontSize: 24,
  },
  profileContainer: {
    position: "relative",
    top: 90,
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: "#2E2E2E",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  username: {
    color: "#FFFFFF",
    top: 95,
    fontSize: 15,
  },
});
