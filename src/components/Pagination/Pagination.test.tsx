import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Given a PlanetDetails component", () => {
  test("When the PlanetDetails render, then it should have the component in it", () => {
    render(<Pagination />);
    const paginationContainer = screen.getByTestId("pag-container");
    expect(paginationContainer).toBeInTheDocument();
  });
});
