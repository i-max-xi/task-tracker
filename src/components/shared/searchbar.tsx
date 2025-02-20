import { useTaskContext } from "@/context/task-context";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import PriorityFilter from "./PriorityFilter"; // Import the new component

const SearchBar: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [allTasks, setAllTasks] = useState(state.tasks);

  useEffect(() => {
    if (state.tasks.length > 0) {
      setAllTasks(state.tasks);
    }
  }, [state.tasks]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      dispatch({ type: "LOAD_TASKS", payload: allTasks });
      return;
    }

    const filteredTasks = allTasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query)
    );

    dispatch({ type: "LOAD_SEARCH_RESULTS", payload: filteredTasks });
  };

  return (
    <div className="flex items-center justify-between mb-4 gap-3">
      <Input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full"
        startContent={
          <Icon icon="mdi:magnify" className="text-xl text-gray-500" />
        }
        endContent={
          searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                dispatch({ type: "LOAD_TASKS", payload: allTasks });
              }}
              className="text-gray-500"
            >
              <Icon icon="mdi:close-circle" className="text-xl" />
            </button>
          )
        }
      />

      {/* Use the extracted PriorityFilter component */}
      <PriorityFilter />
    </div>
  );
};

export default SearchBar;
