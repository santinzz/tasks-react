import { useState } from "react";

export const TaskCreator = ({ createTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          value={newTask}
          placeholder="Ingresa una nueva tarea"
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  );
};
