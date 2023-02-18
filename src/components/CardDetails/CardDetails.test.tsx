import { render, screen } from "@testing-library/react";
import CardDetails from "./CardDetails";

describe("Given a character details component", () => {
  test("When the component renders, then it should appear on screen", () => {
    render(<CardDetails />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
