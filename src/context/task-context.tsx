import { createContext, useContext, useReducer } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  completed?: boolean;
};

export type TaskState = {
  tasks: Task[];
  searchResults: Task[] | null; // Separate state for search results
  filter: "All" | "Low" | "Medium" | "High";
};

type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "EDIT_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "SET_FILTER"; payload: "All" | "Low" | "Medium" | "High" }
  | { type: "LOAD_TASKS"; payload: Task[] }
  | { type: "LOAD_SEARCH_RESULTS"; payload: Task[] | null }
  | { type: "TOGGLE_TASK_COMPLETE"; payload: string }; // (by task ID)

// Load tasks from localStorage
const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

// Initial state
const initialState: TaskState = {
  tasks: loadTasks(), // Load tasks on startup
  searchResults: null, // No search results initially
  filter: "All",
};

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  let newState: TaskState;
  switch (action.type) {
    case "ADD_TASK":
      newState = { ...state, tasks: [...state.tasks, action.payload] };
      break;
    case "EDIT_TASK":
      newState = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
      break;
    case "DELETE_TASK":
      newState = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      break;
    case "SET_FILTER":
      newState = { ...state, filter: action.payload };
      break;
    case "LOAD_TASKS":
      newState = { ...state, tasks: action.payload, searchResults: null };
      break;
    case "LOAD_SEARCH_RESULTS":
      newState = { ...state, searchResults: action.payload };
      break;
    case "TOGGLE_TASK_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    default:
      return state;
  }

  // Persist tasks to localStorage
  localStorage.setItem("tasks", JSON.stringify(newState.tasks));
  return newState;
};

export const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
} | null>(null);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use context
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
