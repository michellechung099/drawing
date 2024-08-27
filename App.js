import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import GetStarted from "./components/GetStarted";
import Email from "./components/Email";
import UserInfo from "./components/UserInfo";
import CreateProfile from "./components/CreateProfile";
import Profile from "./components/Profile";
import UploadPhoto from "./components/UploadPhoto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./navigator/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
