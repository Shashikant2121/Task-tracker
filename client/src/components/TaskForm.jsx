import { useState } from "react";
import API from "../api";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      setError("Title and Due Date are required!");
      return;
    }
    await API.post("/tasks", { title, description, priority, dueDate });
    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");
    setError("");
    fetchTasks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-4 mb-4"
    >
      <h3 className="text-xl font-semibold mb-2">Add Task</h3>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
      />

      <div className="flex gap-2 mb-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 rounded w-1/2"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
      </div>

      <button
        disabled={!title || !dueDate}
        className="bg-blue-600 text-white py-2 px-4 rounded w-full disabled:bg-gray-400"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
