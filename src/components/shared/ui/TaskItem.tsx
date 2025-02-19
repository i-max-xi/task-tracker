import { motion } from "framer-motion";
import { Task, useTaskContext } from "@/context/task-context";

type TaskItemProps = {
  task: Task;
  onEdit: (task: Task) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const { dispatch } = useTaskContext();

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      layout
      className="p-4 border rounded-lg shadow-md bg-white"
    >
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <span
        className={`inline-block px-2 py-1 rounded text-sm font-medium ${
          task.priority === "High"
            ? "bg-red-500 text-white"
            : task.priority === "Medium"
            ? "bg-yellow-500 text-white"
            : "bg-green-500 text-white"
        }`}
      >
        {task.priority}
      </span>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TaskItem;
