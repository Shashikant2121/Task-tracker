import API from "../api";

const TaskItem = ({ task, fetchTasks }) => {
  const toggleStatus = async () => {
    await API.put(`/tasks/${task._id}`, {
      status: task.status === "Pending" ? "Completed" : "Pending",
    });
    fetchTasks();
  };

  const deleteTask = async () => {
    await API.delete(`/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <div className="bg-gray-100 shadow rounded p-3 mb-3 flex justify-between items-center">
      <div>
        <h4 className="font-semibold">{task.title}</h4>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-sm">Priority: {task.priority}</p>
        <p className="text-sm">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
        <span
          className={`font-bold ${
            task.status === "Completed" ? "text-green-600" : "text-orange-500"
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={toggleStatus}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Toggle
        </button>
        <button
          onClick={deleteTask}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;