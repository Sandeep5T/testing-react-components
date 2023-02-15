import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders Hello World! text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.queryByText("Hello World");
    expect(helloWorldElement).not.toBeInTheDocument();
  });

  test('renders "Its good to see you" text if the button was not clicked', () => {
    render(<Greeting />);
    const textConcerned = screen.getByText("Its good to see you!");
    expect(textConcerned).toBeInTheDocument();
  });

  test('renders "changed!" if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const textConcerned = screen.getByText("text changed", { exact: false });
    expect(textConcerned).toBeInTheDocument();
  });

  test("Didn't render good to see you text when the button is clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const textConcerned = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(textConcerned).toBeNull();
  });
});
