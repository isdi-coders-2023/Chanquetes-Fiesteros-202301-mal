import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
describe("Given a Footer component", () => {
  test("When the footer render, must be render in the documment and check paragraph DEvelopers GitHub", () => {
    render(<Footer />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toHaveTextContent("Developers Github");
  });
});
export {};
