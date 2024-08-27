import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "./Button";
import React, { useState, useEffect } from "react";

const UploadPhoto = ({ navigation }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [images, setImages] = useState([]);

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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

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
        {images.length > 0 ? (
          <Image
            source={{ uri: images[images.length - 1] }}
            style={styles.uploadedImage}
          />
        ) : (
          <View style={styles.imageContainer}>
            <Image source={require("../assets/ImagesSquare.png")} />
          </View>
        )}
        <Button
          onPress={() => pickImage()}
          label="Upload a picture"
          gradient={true}
        />
      </View>
      {images.length > 0 && (
        <View style={styles.carouselContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {images.map((imageUri, index) => (
              <View key={index} style={styles.carouselImageContainer}>
                <Image
                  source={{ uri: imageUri }}
                  style={styles.carouselImage}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      )}
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
    height: "80%",
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
  uploadedImage: {
    width: 361,
    height: 329,
    borderRadius: 10,
    resizeMode: "cover",
  },
  carouselContainer: {
    width: "100%",
  },
  carouselImageContainer: {
    opacity: 0.3,
  },
  carouselImage: {
    width: 180,
    height: 180,
    resizeMode: "cover",
  },
});

export default UploadPhoto;
