import React from "react";
import { TaskProvider } from "./TaskContext"
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
