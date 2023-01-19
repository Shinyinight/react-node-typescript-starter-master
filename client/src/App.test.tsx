import { render, screen } from "@testing-library/react";
import App from "./App";

test("should be rendered two inputs for numbers", () => {
  render(<App />);
  const firstInput = screen.getByTestId("first_number_input");
  expect(firstInput).toBeInTheDocument();
  const secondInput = screen.getByTestId("second_number_input");
  expect(secondInput).toBeInTheDocument();
});
