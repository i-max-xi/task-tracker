import { useState, useEffect } from "react";
import { useTaskContext } from "@/context/task-context";
import { v4 as uuidv4 } from "uuid";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";

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

  const handleSubmit = () => {
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
    onClose(); // Close modal after submission
  };

  return (
    <Modal backdrop="transparent" isOpen={true} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{editTask ? "Edit Task" : "Add Task"}</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
          />
          <Textarea
            label="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isRequired
          />
          <Select
            label="Priority"
            selectedKeys={[priority]}
            onChange={(e) =>
              setPriority(e.target.value as "Low" | "Medium" | "High")
            }
          >
            <SelectItem key="Low" value="Low">
              Low Priority
            </SelectItem>
            <SelectItem key="Medium" value="Medium">
              Medium Priority
            </SelectItem>
            <SelectItem key="High" value="High">
              High Priority
            </SelectItem>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={() => handleSubmit()}>
            {editTask ? "Update Task" : "Add Task"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskForm;
