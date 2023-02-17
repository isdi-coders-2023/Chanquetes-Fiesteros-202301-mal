import { AppState } from "../../types/appInterfaces";
import { ActionTypes, AppActions } from "../actions/actions";
import appReducer from "./appReducer";

describe("Given the app reducer", () => {
  const mockDefault: AppState = {
    characters: [],
    planets: [],
    currentPageCharacters: 5,
    currentPagePlanets: 5,
  };
  const mockMinimumPages: AppState = {
    characters: [],
    planets: [],
    currentPageCharacters: 1,
    currentPagePlanets: 1,
  };
  const mockPlanets: AppState = {
    planets: [
      {
        id: 1,
        name: "Earth (C-137)",
        created: "",
        dimension: "",
        residents: [""],
        type: "",
      },
      {
        id: 2,
        name: "Abadango",
        created: "",
        dimension: "",
        residents: [""],
        type: "",
      },
    ],
    characters: [],
    currentPagePlanets: 1,
    currentPageCharacters: 1,
  };
  const mockCharacters: AppState = {
    characters: [
      {
        id: 1,
        name: "Rick Sanchez",
        created: "",
        gender: "",
        image: "",
        species: "",
        status: "",
        url: "",
      },
      {
        id: 2,
        name: "Morty Smith",
        created: "",
        gender: "",
        image: "",
        species: "",
        status: "",
        url: "",
      },
    ],
    planets: [],
    currentPageCharacters: 1,
    currentPagePlanets: 1,
  };
  test("When the reducer goes to default case, then the new state shouldn't change", () => {
    const defaultAction = {
      type: "",
    };
    const updateState = appReducer(
      mockDefault,
      defaultAction as unknown as AppActions
    );
    expect(updateState).toEqual(mockDefault);
  });

  test("When the reducer receives GET_PLANETS action, then the state should change with the new planets", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.GET_PLANETS,
      payload: mockPlanets.planets,
    };
    const updateState = appReducer(mockPlanets, planetsAction);
    expect(updateState).toEqual(mockPlanets);
  });

  test("When the reducer receives REMOVE_PLANET action, then the new state shouldn't have the planet given", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.REMOVE_PLANET,
      payload: 2,
    };
    const updateState = appReducer(mockPlanets, planetsAction);
    expect(updateState.planets).toHaveLength(1);
  });

  test("When the reducer receives GET_CHARACTERS action, then the state should change with the new characters", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.GET_CHARACTERS,
      payload: mockCharacters.characters,
    };
    const updateState = appReducer(mockCharacters, planetsAction);
    expect(updateState).toEqual(mockCharacters);
  });

  test("When the reducer receives REMOVE_CHARACTERS action, then the new state shouldn't have the character given", () => {
    const charactersAction: AppActions = {
      type: ActionTypes.REMOVE_CHARACTER,
      payload: 2,
    };
    const updateState = appReducer(mockCharacters, charactersAction);
    expect(updateState.characters).toHaveLength(1);
  });

  test("When the user triggers the characters next page action, then the pagination should be one number higher than before", () => {
    const nextPageCharacters: AppActions = {
      type: ActionTypes.NEXT_PAGE_CHARACTERS,
      payload: 10,
    };
    const execNextPageCharacters = appReducer(mockDefault, nextPageCharacters);
    expect(execNextPageCharacters.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters + 1
    );
  });

  test("When the user triggers the characters previous page action, then the pagination should be one number lower than before", () => {
    const prevPageCharacters: AppActions = {
      type: ActionTypes.PREV_PAGE_CHARACTERS,
    };
    const execPrevPageCharacters = appReducer(mockDefault, prevPageCharacters);
    expect(execPrevPageCharacters.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters - 1
    );
  });

  test("When the user triggers the planets next page action, then the pagination should be one number higher than before", () => {
    const nextPagePlanets: AppActions = {
      type: ActionTypes.NEXT_PAGE_PLANETS,
      payload: 10,
    };
    const execNextPagePlanets = appReducer(mockDefault, nextPagePlanets);
    expect(execNextPagePlanets.currentPagePlanets).toBe(
      mockDefault.currentPagePlanets + 1
    );
  });

  test("When the user triggers the planets previous page action, then the pagination should be one number lower than before", () => {
    const prevPagePlanets: AppActions = {
      type: ActionTypes.PREV_PAGE_PLANETS,
    };
    const execPrevPagePlanets = appReducer(mockDefault, prevPagePlanets);
    expect(execPrevPagePlanets.currentPagePlanets).toBe(
      mockDefault.currentPagePlanets - 1
    );
  });

  test("When the user triggers the characters next page action and the actual page is the higher, then the pagination shouldn't change", () => {
    const nextPageCharacters: AppActions = {
      type: ActionTypes.NEXT_PAGE_CHARACTERS,
      payload: 5,
    };
    const execNextPageCharacters = appReducer(mockDefault, nextPageCharacters);
    expect(execNextPageCharacters.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters
    );
  });

  test("When the user triggers the planets next page action and the actual page is the higher, then the pagination shouldn't change", () => {
    const nextPagePlanets: AppActions = {
      type: ActionTypes.NEXT_PAGE_PLANETS,
      payload: 5,
    };
    const execNextPagePlanets = appReducer(mockDefault, nextPagePlanets);
    expect(execNextPagePlanets.currentPagePlanets).toBe(
      mockDefault.currentPagePlanets
    );
  });

  test("When the user triggers the characters previous page action and the actual page is the lowest, then the pagination shouldn't change", () => {
    const prevPageCharacters: AppActions = {
      type: ActionTypes.PREV_PAGE_CHARACTERS,
    };

    const execPrevPageCharacters = appReducer(
      mockMinimumPages,
      prevPageCharacters
    );
    expect(execPrevPageCharacters.currentPageCharacters).toBe(
      mockMinimumPages.currentPageCharacters
    );
  });

  test("When the user triggers the planets previous page action and the actual page is the lowest, then the pagination shouldn't change", () => {
    const prevPagePlanets: AppActions = {
      type: ActionTypes.PREV_PAGE_PLANETS,
    };
    const execPrevPagePlanets = appReducer(mockMinimumPages, prevPagePlanets);
    expect(execPrevPagePlanets.currentPagePlanets).toBe(
      mockMinimumPages.currentPagePlanets
    );
  });
});
