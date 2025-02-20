import { render, fireEvent, screen } from "@testing-library/react";
import { TaskProvider } from "@/context/task-context";
import "@testing-library/jest-dom";
import PriorityFilter from "@/components/shared/PriorityFilter";

describe("PriorityFilter Component", () => {
  it("renders the filter icon", () => {
    render(
      <TaskProvider>
        <PriorityFilter />
      </TaskProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens filter options when clicked", () => {
    render(
      <TaskProvider>
        <PriorityFilter />
      </TaskProvider>
    );

    const filterButton = screen.getByRole("button");
    fireEvent.click(filterButton);

    expect(screen.getByText("Filter by Priority")).toBeInTheDocument();
  });

  it("updates filter when a priority is selected", () => {
    render(
      <TaskProvider>
        <PriorityFilter />
      </TaskProvider>
    );

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("High Priority"));

    expect(screen.getByText("High Priority")).toBeInTheDocument();
  });
});
