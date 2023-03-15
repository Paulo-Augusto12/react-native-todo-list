import React from "react";
import { Keyboard } from "react-native";
import { useState } from "react";

import { ITask } from "../../ITask";

import uuid from "react-native-uuid";
export function useHome() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleAddTask() {
    const newTask = {
      title: newTaskTitle,
      completed: false,
      id: uuid.v4() as string,
    };

    if (!newTask.title.trim()) {
      return;
    }

    setTasks([...tasks, newTask]);
    Keyboard.dismiss();
    setNewTaskTitle("");
  }

  function handleDeletetask(id: string) {
    const removedTask = tasks.filter((task) => task.id !== id);

    setTasks(removedTask);
  }

  function handleChange(id: string) {
    const selectedTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(selectedTask);
  }

  return {
    handleChange,
    handleDeletetask,
    handleAddTask,

    setNewTaskTitle,
    newTaskTitle,
    tasks,
  };
}
