import { Check } from "phosphor-react-native";
import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ITaskProps {
  description: string;
  completed: boolean;
  handleChangeStatus: () => void;
}
export function Task({
  description,
  completed,
  handleChangeStatus,
}: ITaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.initialElements}>
        <TouchableOpacity onPress={() => handleChangeStatus()}>
          {completed ? (
            <View style={styles.completedTask}>
              <Check size={32} />
            </View>
          ) : (
            <View style={styles.square} />
          )}
        </TouchableOpacity>
        <Text
          style={
            completed ? styles.completedTaskDescription : styles.taskDescription
          }
        >
          {description}
        </Text>
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
    textDecorationLine: "none",
  },
  completedTaskDescription: {
    fontSize: 14,
    fontWeight: "400",
    color: "#1A1A1A",
    textDecorationLine: "line-through",
  },
  dot: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: "#55BCF666",
    borderRadius: 5,
  },
  completedTask: {
    width: 24,
    height: 24,
    // backgroundColor: "#000",
    borderRadius: 5,
  },
});
