import { useState } from "react";
import TaskForm from "./TaskForm";
import { AnimatePresence } from "framer-motion";
import { Task, useTaskContext } from "@/context/task-context";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { state } = useTaskContext();
  const [editTask, setEditTask] = useState<Task | null>(null);

  // Show search results if available, otherwise show full tasks list
  const taskList =
    state.searchResults !== null ? state.searchResults : state.tasks;

  const filteredTasks =
    state.filter === "All"
      ? taskList
      : taskList.filter((task) => task.priority === state.filter);

  return (
    <div className="p-4 px-8">
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} onEdit={setEditTask} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {editTask && (
        <TaskForm editTask={editTask} onClose={() => setEditTask(null)} />
      )}
    </div>
  );
};

export default TaskList;
