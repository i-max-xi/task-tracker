import { useTaskContext } from "@/context/task-context";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

const priorities = [
  { key: "All", label: "All Tasks", icon: "mdi:filter-variant" },
  { key: "Low", label: "Low Priority", icon: "mdi:check-circle-outline" },
  { key: "Medium", label: "Medium Priority", icon: "mdi:alert-outline" },
  { key: "High", label: "High Priority", icon: "mdi:alert-circle-outline" },
];

const PriorityFilter: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (priority: "All" | "Low" | "Medium" | "High") => {
    dispatch({ type: "SET_FILTER", payload: priority });
    setIsFilterOpen(false); // Close popover after selection
  };

  return (
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
  );
};

export default PriorityFilter;
