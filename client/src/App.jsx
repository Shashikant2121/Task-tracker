import { useEffect, useState } from "react";
import API from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filtered =
    filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">Task Tracker</h2>

      <TaskForm fetchTasks={fetchTasks} />

      <div className="flex justify-end mb-4">
        <select
          className="border p-2 rounded"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      <TaskList tasks={filtered} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
