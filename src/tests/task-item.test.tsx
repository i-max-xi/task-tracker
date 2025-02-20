import { render, fireEvent, screen } from "@testing-library/react";
import TaskItem from "@/components/ui/TaskItem";
import { Task, TaskProvider } from "@/context/task-context";
import "@testing-library/jest-dom";

const mockTask: Task = {
  id: "1",
  title: "Test Task",
  description: "Test Description",
  priority: "Medium",
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

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
  });

  it("displays the correct priority icon", () => {
    render(
      <TaskProvider>
        <TaskItem task={{ ...mockTask, priority: "High" }} onEdit={() => {}} />
      </TaskProvider>
    );

    expect(screen.getByText("High")).toBeInTheDocument();
    expect(screen.getByTestId("mdi:alert-circle")).toBeInTheDocument();
  });
});
