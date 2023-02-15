import { render, screen } from "@testing-library/react";
import Error404 from "./Error404";

describe("Given a Error404 component", () => {
  test("When the error404 render, must render in the document and link", () => {
    render(<Error404 />);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Flip the pickle.");
  });
});
