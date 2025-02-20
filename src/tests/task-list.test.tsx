import { render, screen } from "@testing-library/react";
import TaskList from "@/components/ui/TaskList";
import { TaskState, TaskContext } from "@/context/task-context";
import "@testing-library/jest-dom";
import { ReactNode } from "react";

const mockState: TaskState = {
  tasks: [
    {
      id: "1",
      title: "Sample Task",
      description: "Sample Desc",
      priority: "Medium",
    },
    {
      id: "2",
      title: "Another Task",
      description: "Another Desc",
      priority: "High",
    },
  ],
  filter: "All",
  searchResults: null,
};

// ✅ Create a custom mock TaskProvider
const MockTaskProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TaskContext.Provider value={{ state: mockState, dispatch: jest.fn() }}>
      {children}
    </TaskContext.Provider>
  );
};

describe("TaskList Component", () => {
  it("displays 'No tasks available' when task list is empty", () => {
    render(
      <TaskContext.Provider
        value={{
          state: { tasks: [], filter: "All", searchResults: null },
          dispatch: jest.fn(),
        }}
      >
        <TaskList />
      </TaskContext.Provider>
    );

    expect(screen.getByText("No tasks available.")).toBeInTheDocument();
  });

  it("renders a list of tasks when tasks exist", () => {
    render(
      <MockTaskProvider>
        <TaskList />
      </MockTaskProvider>
    );

    expect(screen.queryByText("No tasks available.")).not.toBeInTheDocument();
    expect(screen.getByText("Sample Task")).toBeInTheDocument();
    expect(screen.getByText("Another Task")).toBeInTheDocument();
  });
});
