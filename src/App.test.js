import App from "./App";
import { render, screen } from "@testing-library/react";

test("renders contains learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
