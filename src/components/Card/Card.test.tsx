import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  test("When the Card render, must be render in the documment and check Dimension", () => {
    render(<Card />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toHaveTextContent("Dimension");
  });
});
export {};
