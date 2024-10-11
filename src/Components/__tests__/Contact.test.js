import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should have submit button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should have submit button search by text", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("should load input name", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Enter your Name");
  expect(nameInput).toBeInTheDocument();
});
