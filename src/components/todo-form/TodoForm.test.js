import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import TodoForm from "./TodoForm";

afterEach(cleanup);

describe("TodoForm", () => {
  it("should call submit function and clear input when form is submitted", () => {
    const mockSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <TodoForm submitTodo={mockSubmit} />
    );
    const submitButton = getByText("Submit");

    fireEvent.click(submitButton);

    expect(mockSubmit).toBeCalledTimes(1);
    expect(getByLabelText(/Add todo:/i)).toHaveTextContent("");
  });

  it("should update input field when user types", () => {
    const { getByLabelText } = render(<TodoForm submitTodo={() => {}} />);
    const inputBox = getByLabelText(/Add todo:/i);

    fireEvent.change(inputBox, { target: { value: "abc" } });

    expect(inputBox.value).toEqual("abc");
  });
});
