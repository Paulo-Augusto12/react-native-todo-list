import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "./components/Task/index";
import { useState } from "react";
import { ITask } from "./ITask";
import uuid from "react-native-uuid";

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleAddTask() {
    Keyboard.dismiss();
    const newTask = {
      title: newTaskTitle,
      completed: false,
      id: uuid.v4() as string,
    };

    if (!newTask.title.trim()) {
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  function handleDeletetask(id: string) {
    const removedTask = tasks.filter((task) => task.id !== id);

    setTasks(removedTask);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's tasks</Text>
      <StatusBar style="auto" />
      <View style={styles.tasksContainer}>
        {tasks.map((task) => (
          <TouchableOpacity onPress={() => handleDeletetask(task.id)}>
            <Task description={task.title} />
          </TouchableOpacity>
        ))}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          onChangeText={setNewTaskTitle}
          style={styles.input}
          placeholder="Write a new task"
          value={newTaskTitle}
          placeholderTextColor={"#C0C0C0"}
        />
        <TouchableOpacity
          style={styles.addTaskWrapper}
          onPress={() => {
            handleAddTask();
          }}
        >
          <View style={styles.addButton}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: 94,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  tasksContainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  writeTaskWrapper: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 60,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    width: 250,
    borderColor: "#C0C0C0",
    borderWidth: 2,
  },
  addTaskWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 2,
  },
  addButton: {},
  plusIcon: {
    color: "#C0C0C0",
    fontSize: 32,
  },
});
