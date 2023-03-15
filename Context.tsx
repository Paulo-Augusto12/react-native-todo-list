import { createContext, useContext, useState } from "react";
import { ITask } from "./ITask";

interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
export const TaskContext = createContext({} as ITaskContext);

interface ITaskContextProviderProps {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: ITaskContextProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const valueObject = { tasks, setTasks };

  return (
    <TaskContext.Provider value={valueObject}>{children}</TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}
