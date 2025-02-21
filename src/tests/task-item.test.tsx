import { render, fireEvent, screen } from "@testing-library/react";
import TaskItem from "@/components/ui/TaskItem";
import { Task, TaskProvider } from "@/context/task-context";
import "@testing-library/jest-dom";

const mockTask: Task = {
  id: "1",
  title: "Test Task",
  description: "Test Description",
  priority: "Medium",
  completed: false,
};

describe("TaskItem Component", () => {
  it("renders task correctly", () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} onEdit={() => {}} />
      </TaskProvider>
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
  });

  it("calls onEdit when Edit button is clicked", () => {
    const onEditMock = jest.fn();
    render(
      <TaskProvider>
        <TaskItem task={mockTask} onEdit={onEditMock} />
      </TaskProvider>
    );

    fireEvent.click(screen.getByText("Edit"));
    expect(onEditMock).toHaveBeenCalledWith(mockTask);
  });

  it("removes task when Delete button is clicked", () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} onEdit={() => {}} />
      </TaskProvider>
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
  });

  it("toggles task completion state when checkbox is clicked", () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} onEdit={() => {}} />
      </TaskProvider>
    );

    const checkbox = screen.getByRole("checkbox");

    // Ensure task is initially not completed
    expect(checkbox).not.toBeChecked();

    // Click checkbox to mark as completed
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    // Click checkbox again to unmark as completed
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
