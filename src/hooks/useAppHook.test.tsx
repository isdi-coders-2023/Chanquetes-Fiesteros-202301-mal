import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { server } from "../mocks/server";
import AppProvider from "../store/contexts/app.provider";
import useAppHook from "./useAppHook";

describe("Given an app custom hook", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("When the user request a planets list, then the hook should return a planet", async () => {
    interface WrapperProps {
      children: JSX.Element;
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.getPlanetsList([1]));
    expect(result.current.state.planets[0].id).toBe(1);
  });

  test("When the user request a characters list, then the hook should return a character", async () => {
    interface WrapperProps {
      children: JSX.Element | JSX.Element[];
    }
    const Wrapper = ({ children }: WrapperProps) => (
      <AppProvider>{children}</AppProvider>
    );
    const { result } = renderHook(useAppHook, { wrapper: Wrapper });
    await act(async () => result.current.getCharactersList([1]));
    expect(result.current.state.characters[0].id).toBe(1);
  });
});
