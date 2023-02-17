import { AppState } from "../../types/appInterfaces";
import { ActionTypes, AppActions } from "../actions/actions";
import appReducer from "./appReducer";

describe("Given the app reducer", () => {
  const mockDefault: AppState = {
    characters: [],
    planets: [],
    pagination: 1,
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
    pagination: 1,
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
    pagination: 1,
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

  test("When the reducer receives INITIALIZE_PLANETS action, then the state should change with the new planets", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.INITIALIZE_PLANETS,
      payload: mockPlanets.planets,
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState.planets).toEqual(mockPlanets.planets);
  });

  test("When the reducer receives REMOVE_PLANET action, then the new state shouldn't have the planet given", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.REMOVE_PLANET,
      payload: 1,
    };
    const updateState = appReducer(mockPlanets, planetsAction);
    expect(updateState.planets).toHaveLength(1);
  });

  test("When the reducer receives INITIALIZE_CHARACTERS action, then the state should change with the new characters", () => {
    const planetsAction: AppActions = {
      type: ActionTypes.INITIALIZE_CHARACTERS,
      payload: mockCharacters.characters,
    };
    const updateState = appReducer(mockDefault, planetsAction);
    expect(updateState.characters).toEqual(mockCharacters.characters);
  });

  test("When the reducer receives REMOVE_CHARACTERS action, then the new state shouldn't have the character given", () => {
    const charactersAction: AppActions = {
      type: ActionTypes.REMOVE_CHARACTER,
      payload: 1,
    };
    const updateState = appReducer(mockCharacters, charactersAction);
    expect(updateState.characters).toHaveLength(1);
  });

  test("When the reducer receives GO_TO_NEXT_PAGE action, then the pagination property should be one number higher than before", () => {
    const paginationAction: AppActions = {
      type: ActionTypes.GO_TO_NEXT_PAGE,
      payload: 10,
    };
    const updateState = appReducer(mockDefault, paginationAction);
    expect(updateState.pagination).toBe(mockDefault.pagination + 1);
  });

  test("When the reducer receives GO_TO_PREV_PAGE action, then the pagination property should be one number lower than before", () => {
    const paginationAction: AppActions = {
      type: ActionTypes.GO_TO_PREV_PAGE,
    };
    const updateState = appReducer(mockDefault, paginationAction);
    expect(updateState.pagination).toBe(mockDefault.pagination - 1);
  });
});
