import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Task } from "./components/Task/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's tasks</Text>
      <StatusBar style="auto" />
      <View style={styles.tasksContainer}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </View>
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
});
