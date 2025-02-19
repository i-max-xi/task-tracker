import { useTaskContext } from "@/context/task-context";
import { useState, useEffect } from "react";
import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

const priorities = [
  {
    key: "All",
    label: "All Tasks",
    icon: "mdi:filter-variant",
    color: "default",
  },
  {
    key: "Low",
    label: "Low Priority",
    icon: "mdi:check-circle-outline",
    color: "success",
  },
  {
    key: "Medium",
    label: "Medium Priority",
    icon: "mdi:alert-outline",
    color: "warning",
  },
  {
    key: "High",
    label: "High Priority",
    icon: "mdi:alert-circle-outline",
    color: "danger",
  },
];

const SearchBar: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [allTasks, setAllTasks] = useState(state.tasks);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

    dispatch({ type: "LOAD_TASKS", payload: filteredTasks });
  };

  const handleFilterChange = (priority: "All" | "Low" | "Medium" | "High") => {
    dispatch({ type: "SET_FILTER", payload: priority });
    setIsFilterOpen(false); // Close popover after selection
  };

  return (
    <div className="flex items-center justify-between mb-4 gap-3">
      {/* Search Input */}
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

      {/* Priority Filter Icon with Popover */}
      <Popover
        isOpen={isFilterOpen}
        onOpenChange={setIsFilterOpen}
        placement="bottom-end"
      >
        <PopoverTrigger>
          <Button isIconOnly variant="light" size="md">
            <Icon
              icon="mdi:filter-variant"
              className="text-2xl text-gray-600 hover:text-gray-800"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-3 w-48">
          <h4 className="text-lg font-semibold mb-2 text-center">
            Filter by Priority
          </h4>
          <div className="flex flex-col gap-2">
            {priorities.map(({ key, label, icon }) => (
              <Button
                key={key}
                variant={state.filter === key ? "solid" : "light"}
                onPress={() =>
                  handleFilterChange(key as "All" | "Low" | "Medium" | "High")
                }
                className="flex items-center justify-start"
              >
                <Icon icon={icon} className="text-lg mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBar;
