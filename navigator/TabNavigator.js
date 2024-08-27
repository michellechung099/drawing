import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../components/Profile";
import UploadPhoto from "../components/UploadPhoto";
import PhotosList from "../components/PhotosList";
import PencilCircle from "../assets/PencilCircle.png";
import ProfileIcon from "../assets/ProfileIcon.png";
import Notebook from "../assets/Notebook.png";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="UploadPhoto"
      screenOptions={{
        tabBarActiveBackgroundColor: "#323232",
        tabBarInactiveBackgroundColor: "#101010",
        tabBarStyle: {
          height: 90,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={PencilCircle} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="PhotosList"
        component={PhotosList}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={Notebook} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={ProfileIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
