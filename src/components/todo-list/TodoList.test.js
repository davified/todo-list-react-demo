import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "react-testing-library";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TodoList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should add and display a new todo when submitTodo is called", () => {
    const { getByText, getByLabelText } = render(<TodoList />);
    const inputBox = getByLabelText(/Add todo:/i);
    const submitButton = getByText("Submit");

    fireEvent.change(inputBox, { target: { value: "my new todo" } });
    fireEvent.click(submitButton);

    expect(getByText("my new todo")).toBeDefined();
  });
});
