import React, { useEffect, createContext, useState } from 'react';

export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);
  
  

  
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

 
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };


  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
   
    alert("Tasks saved to local storage!");
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask,saveTasksToLocalStorage  }}>
      {children}
    </TaskContext.Provider>
  );
};
