import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ label, gradient }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        {gradient ? (
          <LinearGradient
            colors={["#0062B3", "#08E2D0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonLabel}>{label}</Text>
          </LinearGradient>
        ) : (
          <View style={styles.clearBackground}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    borderRadius: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10, // Padding top
    paddingRight: 0, // Padding right
    paddingBottom: 0, // Padding bottom
    paddingLeft: 0, // Padding left
    marginVertical: 10, // Gap (vertical margin to simulate gap)
    borderTopLeftRadius: 60, // Border radius for the top left corner
    borderTopRightRadius: 0, // Border radius for the top right corner
    borderBottomRightRadius: 0, // Border radius for the bottom right corner
    borderBottomLeftRadius: 0,
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "PlayfairDisplay_400Regular",
    justifyContent: "center",
  },
  gradient: {
    borderRadius: 25,
    width: "100%", // Set the width to 100% to cover the container
    height: 60, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
  },
  clearBackground: {
    backgroundColor: "transparent",
  },
});
