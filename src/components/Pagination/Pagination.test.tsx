import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useAppHook from "../../hooks/useAppHook";
import AppProvider from "../../store/contexts/app.provider";
import Pagination from "./Pagination";

describe("Given a PlanetDetails component", () => {
  test("When the PlanetDetails render, then it should have the component in it", () => {
    render(<Pagination typeOfPagination="planets" />);
    const paginationContainer = screen.getByTestId("pag-container");
    expect(paginationContainer).toBeInTheDocument();
  });

  test("When the user clicks a previous page button, then it should change global context pages", async () => {
    render(<Pagination typeOfPagination="planets" />);
    const buttonElement = screen.getByTestId("button");
    interface WrapperProps {
      children: JSX.Element | JSX.Element[];
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider currentPagePlanets={5}>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => {
      result.current.charactersPagination("prev");
      expect(result.current.state.currentPagePlanets).toBe(5);
    });
    userEvent.click(buttonElement);
    await waitFor(() => {
      expect(result.current.state.currentPagePlanets).toBe(4);
    });
  });
});
