import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useFetch } from "./src/hooks/useFetch";

export default function App() {
  const [text, setText] = useState("");
  const [q, setQ] = useState<string | null>(null);
  const { data, error, isLoading } = useFetch(q);

  const handleOnChangeText = (text: string) => {
    setText(text);
  };

  const handleOnPress = () => {
    if (text && text.length > 0) setQ(text);
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Hello Sitemate!</Text>
      <Text>Text {text}</Text>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        onChangeText={handleOnChangeText}
        value={text}
      />

      <Button onPress={handleOnPress} title="Search" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#CCC",
    width: 100
  }
});
