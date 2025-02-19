import { motion } from "framer-motion";
import { Task, useTaskContext } from "@/context/task-context";
import { Icon } from "@iconify/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

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
    >
      <Card shadow="sm" className="p-4">
        <CardHeader className="flex gap-1 items-center">
          <Checkbox />
          <h3 className="text-lg font-semibold flex items-center gap-2">
            {task.title}
          </h3>
        </CardHeader>
        <CardBody>
          <p className="text-gray-600">{task.description}</p>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <p
            className={`p-2 rounded-md text-sm font-medium flex items-center ${
              task.priority === "High"
                ? "bg-red-500 text-white"
                : task.priority === "Medium"
                ? "bg-yellow-500 text-black"
                : "bg-green-500 text-white"
            }`}
          >
            <Icon
              icon={
                task.priority === "High"
                  ? "mdi:alert-circle"
                  : task.priority === "Medium"
                  ? "mdi:alert"
                  : "mdi:check-circle"
              }
              className="mr-1"
            />
            {task.priority}
          </p>
          <div className="flex gap-2">
            <Button
              color="primary"
              variant="light"
              size="sm"
              onClick={() => onEdit(task)}
            >
              <Icon icon="mdi:pencil" className="mr-1" /> Edit
            </Button>
            <Button
              color="danger"
              variant="light"
              size="sm"
              onClick={handleDelete}
            >
              <Icon icon="mdi:trash-can-outline" className="mr-1" /> Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TaskItem;
