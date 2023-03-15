import { Check } from "phosphor-react-native";
import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./style";

interface ITaskProps {
  description: string;
  completed: boolean;
  handleChangeStatus: () => void;
  handleNavigate: () => void;
}
export function Task({
  description,
  completed,
  handleChangeStatus,
  handleNavigate,
}: ITaskProps) {
  const propstyles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "#fff",
      opacity: completed ? 0.5 : 100,
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    taskDescription: {
      fontSize: 14,
      fontWeight: "400",
      color: "#1A1A1A",
      textDecorationLine: completed ? "line-through" : "none",
    },
  });
  return (
    <TouchableOpacity onPress={() => handleNavigate()}>
      <View style={propstyles.container}>
        <View style={styles.initialElements}>
          <TouchableOpacity onPress={() => handleChangeStatus()}>
            {completed ? (
              <View style={styles.completedTask}>
                <Check size={12} color="#1A1A1A" />
              </View>
            ) : (
              <View style={styles.square} />
            )}
          </TouchableOpacity>
          <Text style={propstyles.taskDescription}>{description}</Text>
        </View>
        <View>
          <View style={styles.dot}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
