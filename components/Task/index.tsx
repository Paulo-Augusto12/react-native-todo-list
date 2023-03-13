import React from "react";

import { View, Text, Touchable, StyleSheet } from "react-native";

export function Task() {
  return (
    <View style={styles.container}>
      <View style={styles.initialElements}>
        <View style={styles.square}></View>
        <Text style={styles.taskDescription}>task</Text>
      </View>
      <View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  initialElements: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF666",
    borderRadius: 5,
  },
  taskDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: "#1A1A1A",
  },
  dot: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#55BCF666",
    borderRadius: 5,
  },
});
