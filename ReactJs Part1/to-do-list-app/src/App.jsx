import React, { useState } from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [taskIndex, setTaskIndex] = useState(null);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      resetInputField();
    }
  };

  const handleEditTask = (index) => {
    setIsEditing(true);
    setTaskIndex(index);
    setInputValue(tasks[index].text);
  };

  const handleSaveTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, text: inputValue } : task
    );
    setTasks(updatedTasks);
    resetInputField();
  };

  const handleToggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const resetInputField = () => {
    setInputValue("");
    setIsEditing(false);
    setTaskIndex(null);
  };

  return (
    <div className="todo__app">
      <h2>To-Do List</h2>
      <div className="todo__input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={isEditing ? handleSaveTask : handleAddTask}>
          {isEditing ? "Save" : "Add"}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task__item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTaskCompletion(index)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#a0a0a0" : "#f5f5f5",
                }}
              >
                {task.text}
              </span>
            </div>
            <div>
              <button onClick={() => handleEditTask(index)}>
                <i className="bx bxs-edit"></i> Edit
              </button>
              <button onClick={() => handleDeleteTask(index)}>
                <i className="bx bxs-trash-alt"></i> Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
