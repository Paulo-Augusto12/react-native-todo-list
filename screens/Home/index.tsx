import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "../../components/Task/index";
import { useApp } from "../../useApp";
import { styles } from "./style";
import { useTask } from "../../Context";

export function Home({ navigation: { navigate } }: any) {
  const hook = useApp();
  const context = useTask()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's tasks</Text>
        <StatusBar style="auto" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            onChangeText={hook.setNewTaskTitle}
            style={styles.input}
            placeholder="Write a new task"
            value={hook.newTaskTitle}
            placeholderTextColor={"#C0C0C0"}
          />
          <TouchableOpacity
            style={styles.addTaskWrapper}
            onPress={() => {
              hook.handleAddTask();
            }}
          >
            <View>
              <Text style={styles.plusIcon}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <SafeAreaView>
        <FlatList
          style={styles.tasksContainer}
          data={context.tasks}
          renderItem={({ item }) => (
            <Task
              description={item.title}
              completed={item.completed}
              handleChangeStatus={() => hook.handleChange(item.id)}
              handleNavigate={() => {
                if (context.tasks) {
                  navigate("Task_Editor", {
                    selectedTask: item,
                    tasks: context.tasks,
                  });
                }
              }}
              handleDelete={() => hook.handleDeletetask(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ padding: 16 }} />}
        />
      </SafeAreaView>
    </View>
  );
}
