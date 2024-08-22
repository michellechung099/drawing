import { StyleSheet, TextInput } from "react-native";
import Button from "./Button";
import { useState } from "react";

export default function Email() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>What's your email?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Button label="Next" gradient={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {},
});
