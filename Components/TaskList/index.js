import React, { useContext } from "react";
import { TaskContext } from "../../TaskContext";

const TaskList = () => {
  const { tasks, updateTask, deleteTask ,saveTasksToLocalStorage} = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> - {task.status}
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => updateTask({ ...task, status: "Completed" })}>
                Mark as Completed
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick ={saveTasksToLocalStorage}>save</button>
    </div>
  );
};

export default TaskList;
