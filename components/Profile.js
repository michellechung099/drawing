import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PencilIcon from "./PencilIcon";
import Tabs from "../navigator/TabNavigator";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

export default function Profile({ navigation }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const currentUser = auth?.currentUser;

    const fetchUsername = async () => {
      if (currentUser) {
        const uid = currentUser.uid;
        try {
          const docRef = doc(db, "users", uid);
          const userDoc = await getDoc(docRef);

          if (userDoc) {
            const userData = userDoc.data();
            setUsername(userData?.username);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchUsername();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUsername("");
        navigation.replace("GetStarted");
      })
      .catch((error) => alert(error.message));
  };

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
          <View style={styles.usernameContainer}>
            <Text
              style={[styles.username, { fontFamily: "Poppins_500Medium" }]}
            >
              {username || "Guest"}
            </Text>
          </View>
        </View>

        <View
          style={[styles.menuContainer, { fontFamily: "Poppins_400Regular" }]}
        >
          <View style={styles.menuRow}>
            <Text style={styles.rowText}>Profile picture</Text>
            <PencilIcon />
          </View>
          <View style={styles.menuRow}>
            <Text style={styles.rowText}>Email</Text>
            <PencilIcon />
          </View>
          <View style={styles.menuRow}>
            <Text style={styles.rowText}>Password</Text>
            <PencilIcon />
          </View>
        </View>
        <View style={styles.accountControlContainer}>
          <View style={styles.accountControlRow}>
            <TouchableOpacity onPress={handleLogout}>
              <Text
                style={[styles.rowText, { fontFamily: "Poppins_400Regular" }]}
              >
                Log out
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accountControlRow}>
            <Text
              style={[styles.deleteText, { fontFamily: "Poppins_400Regular" }]}
            >
              Delete my account
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  header: {
    paddingTop: 55,
    alignItems: "center",
    flex: 1,
    gap: 42,
    width: "100%",
    paddingRight: 16,
    paddingLeft: 16,
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 24,
  },
  profileContainer: {
    gap: 16,
    position: "relative",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: "#2E2E2E",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  userCircle: {
    width: 72,
    height: 72,
  },
  username: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 20,
  },
  usernameContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  menuContainer: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#2A2A2A",
  },
  menuRow: {
    height: 55,
    paddingTop: 10,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 10,
    gap: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 16,
  },
  accountControlContainer: {
    // flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  accountControlRow: {
    borderRadius: 10,
    backgroundColor: "#2A2A2A",
    width: "100%",
    justifyContent: "center",
    paddingTop: 10,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 10,
    height: 55,
  },
  deleteText: {
    color: "#EB3323",
    fontSize: 16,
    lineHeight: 16,
  },
});
