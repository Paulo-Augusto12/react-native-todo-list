import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./style";
import { ArrowLeft } from "phosphor-react-native";

import { useApp } from "../../useApp";

export function Editor({ route, navigation }: any) {
  const hook = useApp();

  useEffect(() => {
    const allTasks = route.params.tasks;

    hook.setTasks(allTasks);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowLeft size={40} />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#1A1A1A" }}>
          Tasks Editor 
        </Text>
      </View>
      <View style={styles.editorContainer}>
        <View style={styles.editorItems}>
          <TextInput
            value={hook.editedTaskTitle}
            onChangeText={hook.setEditedTaskTitle}
            style={styles.input}
            placeholder="change the title of your task"
          />

          <TextInput
            value={route.params.selectedTask.description}
            placeholder="Add a description to your task"
            style={styles.description}
            multiline
          />
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            navigation.goBack();
            hook.handleEditTask(route.params.selectedTask.id);
          }}
        >
          <View>
            <Text style={{ color: "#ffff", fontWeight: "700", fontSize: 15 }}>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
