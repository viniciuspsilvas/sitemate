import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    marginHorizontal: 12,
    marginVertical: 50,
    fontSize: 14,
    borderRadius: 5
  },
  text: {
    // backgroundColor: "#EBEBEB",
    // padding: 12,
    // marginVertical: 5,
    fontSize: 18
    // borderRadius: 5
  }
});

export default ErrorMessage;
