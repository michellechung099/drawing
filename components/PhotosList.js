import { View, Text, StyleSheet } from "react-native";

const PhotosList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Photos List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
});

export default PhotosList;
