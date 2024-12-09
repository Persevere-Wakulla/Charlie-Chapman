import { useState } from "react";

const ReactToDoList = () => {
  const [tasks, setTasks] = useState([
    "Learn Coding",
    "UnderStand Coding",
    "Get a job coding",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if(newTask.trim() !== ''){

        setTasks(t =>[...t,newTask])
        setNewTask('')
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index )
    setNewTask(updatedTasks)
  };

  const moveTaskUp = (index) => {
    if(index > 0){
        const updatedTasks = [...tasks]
        [[index], [index -1]] = [[index - 1], [index]]
        setTasks()
    }
  };

  const moveTaskDown = (index) => {};

  return (
    <div className="toDoList">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="moveUP-btn" onClick={() => moveTaskUp}>
             👆🏽
            </button>
            <button className="moveDown-btn" onClick={() => moveTaskDown}>
             👇🏽
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default ReactToDoList;
