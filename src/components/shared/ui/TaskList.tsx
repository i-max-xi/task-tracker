import { useState } from "react";
import TaskForm from "./TaskForm";
import { AnimatePresence } from "framer-motion";
import { Task, useTaskContext } from "@/context/task-context";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { state } = useTaskContext();
  const [editTask, setEditTask] = useState<Task | null>(null);

  const filteredTasks =
    state.filter === "All"
      ? state.tasks
      : state.tasks.filter((task) => task.priority === state.filter);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Task List</h2>

      {/* If no tasks */}
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} onEdit={setEditTask} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Task Form (as a modal) */}
      {editTask && (
        <TaskForm editTask={editTask} onClose={() => setEditTask(null)} />
      )}
    </div>
  );
};

export default TaskList;
