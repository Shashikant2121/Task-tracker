import TaskItem from "./TaskItem";

const TaskList = ({ tasks, fetchTasks }) => {
  if (tasks.length === 0)
    return <p className="text-center text-gray-500">No tasks yet.</p>;

  return (
    <div>
      {tasks.map((t) => (
        <TaskItem key={t._id} task={t} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;
