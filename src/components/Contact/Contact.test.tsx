import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
describe("Given a Contact component", () => {
  test("When the contact render, must render in the document and check link 'rickyandmortytravieso@gmail.com'", () => {
    render(<Contact />);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("rickyandmortytravieso@gmail.com");
  });
});
