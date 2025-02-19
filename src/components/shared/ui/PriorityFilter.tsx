import { useTaskContext } from "@/context/task-context";

const PriorityFilter: React.FC = () => {
  const { state, dispatch } = useTaskContext();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value as "All" | "Low" | "Medium" | "High",
    });
  };

  return (
    <div className="mb-4">
      <label className="text-lg font-semibold">Filter by Priority:</label>
      <select
        value={state.filter}
        onChange={handleFilterChange}
        className="ml-2 p-2 border rounded"
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default PriorityFilter;
