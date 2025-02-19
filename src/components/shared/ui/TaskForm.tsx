import { useTaskContext } from "@/context/task-context";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

type TaskFormProps = {
  editTask?: {
    id: string;
    title: string;
    description: string;
    priority: "Low" | "Medium" | "High";
  };
  onClose: () => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ editTask, onClose }) => {
  const { dispatch } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Medium");

  // Populate form when editing
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setPriority(editTask.priority);
    }
  }, [editTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    if (editTask) {
      dispatch({
        type: "EDIT_TASK",
        payload: { ...editTask, title, description, priority },
      });
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: { id: uuidv4(), title, description, priority },
      });
    }
    onClose(); // Close form after submission
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {editTask ? "Edit Task" : "Add Task"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "Low" | "Medium" | "High")
          }
          className="p-2 border rounded"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {editTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
