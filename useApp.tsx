import React from "react";
import { Keyboard } from "react-native";
import { useState } from "react";

import uuid from "react-native-uuid";
import { TaskContext, useTask } from "./Context";
export function useApp() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editedTaskTitle, setEditedTaskTitle] = useState("");

  const context = useTask();

  function handleAddTask() {
    const newTask = {
      title: newTaskTitle,
      completed: false,
      id: uuid.v4() as string,
      description: "",
    };

    if (!newTask.title.trim()) {
      return;
    }

    context.setTasks([...context.tasks, newTask]);
    Keyboard.dismiss();
    setNewTaskTitle("");
  }

  async function handleEditTask(id: string) {
    const editedTask = context.tasks.map((task) => {
      if (task.id === id) {
        task.title = editedTaskTitle;
      }
      return task;
    });
    context.setTasks(editedTask);
  }

  function handleDeletetask(id: string) {
    const removedTask = context.tasks.filter((task) => task.id !== id);

    context.setTasks(removedTask);
  }

  function handleChange(id: string) {
    const selectedTask = context.tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    context.setTasks(selectedTask);
  }

  return {
    handleChange,
    handleDeletetask,
    handleAddTask,

    setNewTaskTitle,
    newTaskTitle,

    editedTaskTitle,
    setEditedTaskTitle,
    handleEditTask,
    TaskContext,
  };
}
