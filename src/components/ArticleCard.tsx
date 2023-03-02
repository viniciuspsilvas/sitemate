import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Article } from "../types";

type ArticleProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <View style={styles.container}>
      <Text>{article.title}</Text>
      <Text style={styles.author}>{article.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEBEB",
    padding: 12,
    marginVertical: 5,
    fontSize: 14,
    borderRadius: 5
  },
  author: {
    fontStyle: "italic",
    color: "#818181",
    fontSize: 12
  }
});

export default ArticleCard;
