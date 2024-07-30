import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={["#E20856", "#DE08E2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonLabel}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 90,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  gradient: {
    borderRadius: 25,
    width: "100%", // Set the width to 100% to cover the container
    height: 60, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
  },
});
