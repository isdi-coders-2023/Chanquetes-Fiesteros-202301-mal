import { AppState } from "../../types/appInterfaces";
import { ActionTypes, AppActions } from "../actions/actions";
import appReducer from "./appReducer";

describe("Given the app reducer", () => {
  test("When the reducer receives default action, then the new state shouldn't change", () => {
    const defaultCase: AppState = { planets: [], characters: [] };
    const defaultAction = {
      type: "",
    };
    const updateState = appReducer(
      defaultCase,
      defaultAction as unknown as AppActions
    );
    expect(updateState).toEqual(defaultCase);
  });

  test("When the reducer receives INITIALIZE_PLANETS action, then the state should change with the new planets", () => {
    const planets: AppState = { planets: [], characters: [] };
    const planetsAction: AppActions = {
      type: ActionTypes.INITIALIZE_PLANETS,
      payload: [
        {
          id: 0,
          name: "planet",
          type: "",
          dimension: "",
          created: "",
          residents: [""],
        },
      ],
    };
    const updateState = appReducer(planets, planetsAction);
    expect(updateState.planets).toEqual([
      {
        id: 0,
        name: "planet",
        type: "",
        dimension: "",
        created: "",
        residents: [""],
      },
    ]);
  });

  test("When the reducer receives REMOVE_PLANET action, then the new state shouldn't have the planet given", () => {
    const planets: AppState = {
      planets: [
        {
          id: 0,
          name: "",
          type: "",
          dimension: "",
          created: "",
          residents: [""],
        },
        {
          id: 1,
          name: "",
          type: "",
          dimension: "",
          created: "",
          residents: [""],
        },
      ],
      characters: [],
    };
    const planetsAction: AppActions = {
      type: ActionTypes.REMOVE_PLANET,
      payload: 0,
    };
    const updateState = appReducer(planets, planetsAction);
    expect(updateState.planets).toHaveLength(1);
  });

  test("When the reducer receives INITIALIZE_CHARACTERS action, then the state should change with the new characters", () => {
    const planets: AppState = { planets: [], characters: [] };
    const planetsAction: AppActions = {
      type: ActionTypes.INITIALIZE_CHARACTERS,
      payload: [
        {
          id: 0,
          name: "character",
          status: "",
          species: "",
          gender: "",
          image: "",
          url: "",
          created: "",
        },
      ],
    };
    const updateState = appReducer(planets, planetsAction);
    expect(updateState.characters).toEqual([
      {
        id: 0,
        name: "character",
        status: "",
        species: "",
        gender: "",
        image: "",
        url: "",
        created: "",
      },
    ]);
  });

  test("When the reducer receives REMOVE_CHARACTERS action, then the new state shouldn't have the character given", () => {
    const characters: AppState = {
      planets: [],
      characters: [
        {
          id: 0,
          name: "",
          created: "",
          gender: "",
          image: "",
          species: "",
          status: "",
          url: "",
        },
        {
          id: 1,
          name: "",
          created: "",
          gender: "",
          image: "",
          species: "",
          status: "",
          url: "",
        },
      ],
    };
    const charactersAction: AppActions = {
      type: ActionTypes.REMOVE_CHARACTER,
      payload: 0,
    };
    const updateState = appReducer(characters, charactersAction);
    expect(updateState.characters).toHaveLength(1);
  });
});
