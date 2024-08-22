import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ label, gradient, fontFamily, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, !gradient && styles.buttonBorder]}
      >
        {gradient ? (
          <LinearGradient
            colors={["#0062B3", "#08E2D0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Text style={[styles.buttonLabel, { fontFamily }]}>{label}</Text>
          </LinearGradient>
        ) : (
          <View style={styles.clearBackground}>
            <Text style={[styles.buttonLabel, { fontFamily }]}>{label}</Text>
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginVertical: 5,
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 60,
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "PlayfairDisplay_400Regular",
    justifyContent: "center",
  },
  gradient: {
    borderRadius: 60,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  clearBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
