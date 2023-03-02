import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import ArticleCard from "./src/components/ArticleCard";
import ErrorMessage from "./src/components/ErrorMessage";
import useFetch from "./src/hooks/useFetch";
import { Articles } from "./src/types";

export default function App() {
  const [text, setText] = useState("");
  const [q, setQ] = useState<string | null>(null);
  const { data, error, isLoading } = useFetch<Articles>(q);

  const handleOnChangeText = (text: string) => {
    setText(text);
  };

  const handleOnPress = () => {
    if (text && text.length > 0) setQ(text);
  };

  if (error) {
    return <ErrorMessage text={error.message} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hello Sitemate!</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleOnChangeText}
          value={text}
          placeholder="Search for articles…"
        />

        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text style={{ color: "white" }}>GO</Text>
        </TouchableOpacity>
      </View>

      {isLoading && (
        <Text style={{ marginVertical: 10, color: "#868686" }}>Loading...</Text>
      )}

      {!isLoading && data && (
        <View style={{ flex: 3 }}>
          <Text style={{ marginVertical: 10, color: "#868686" }}>Results:</Text>
          <FlatList
            data={data?.articles}
            renderItem={(_renderItem) => (
              <ArticleCard article={_renderItem.item} />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 4,
    marginHorizontal: 10
  },
  button: {
    height: 40,
    width: 50,
    backgroundColor: "#009F5B",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4
  },
  header: {
    marginTop: 40,
    paddingVertical: 20,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    height: 40,
    borderColor: "#707070",
    flex: 1,
    borderRadius: 10
  }
});
