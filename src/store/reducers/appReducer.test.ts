import { AppState } from "../../types/appInterfaces";
import { ActionTypes, AppActions } from "../actions/actions";
import appReducer from "./appReducer";

describe("Given the app reducer", () => {
  const mockDefault: AppState = {
    characters: [],
    planets: [],
    characterDetails: {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
    },
    planetDetails: {
      id: 0,
      name: "",
      type: "",
      dimension: "",
      created: "",
      residents: [""],
    },
    currentPageCharacters: 5,
    currentPagePlanets: 5,
    favCharacters: [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "",
        species: "",
        gender: "",
        created: "",
        image: "",
        url: "",
        rating: 3,
      },
    ],
    favCharacter: {
      id: 1,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
      rating: 3,
    },
  };
  const mockMinimumPages: AppState = {
    characters: [],
    planets: [],
    characterDetails: {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
    },
    planetDetails: {
      id: 0,
      name: "",
      type: "",
      dimension: "",
      created: "",
      residents: [""],
    },
    currentPageCharacters: 1,
    currentPagePlanets: 1,
    favCharacters: [],
    favCharacter: {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
      rating: 0,
    },
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
    characterDetails: {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
    },
    planetDetails: {
      id: 0,
      name: "",
      type: "",
      dimension: "",
      created: "",
      residents: [""],
    },
    currentPagePlanets: 1,
    currentPageCharacters: 1,
    favCharacters: [],
    favCharacter: {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
      rating: 0,
    },
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
    characterDetails: {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
    },
    planetDetails: {
      id: 0,
      name: "",
      type: "",
      dimension: "",
      created: "",
      residents: [""],
    },
    currentPageCharacters: 1,
    currentPagePlanets: 1,
    favCharacters: [],
    favCharacter: {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
      rating: 0,
    },
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
    const updateState = appReducer(mockDefault, nextPageCharacters);
    expect(updateState.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters + 1
    );
  });

  test("When the user triggers the characters previous page action, then the pagination should be one number lower than before", () => {
    const prevPageCharacters: AppActions = {
      type: ActionTypes.PREV_PAGE_CHARACTERS,
    };
    const updateState = appReducer(mockDefault, prevPageCharacters);
    expect(updateState.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters - 1
    );
  });

  test("When the user triggers the planets next page action, then the pagination should be one number higher than before", () => {
    const nextPagePlanets: AppActions = {
      type: ActionTypes.NEXT_PAGE_PLANETS,
      payload: 10,
    };
    const updateState = appReducer(mockDefault, nextPagePlanets);
    expect(updateState.currentPagePlanets).toBe(
      mockDefault.currentPagePlanets + 1
    );
  });

  test("When the user triggers the planets previous page action, then the pagination should be one number lower than before", () => {
    const prevPagePlanets: AppActions = {
      type: ActionTypes.PREV_PAGE_PLANETS,
    };
    const updateState = appReducer(mockDefault, prevPagePlanets);
    expect(updateState.currentPagePlanets).toBe(
      mockDefault.currentPagePlanets - 1
    );
  });

  test("When the user triggers the characters next page action and the actual page is the higher, then the pagination shouldn't change", () => {
    const nextPageCharacters: AppActions = {
      type: ActionTypes.NEXT_PAGE_CHARACTERS,
      payload: 5,
    };
    const updateState = appReducer(mockDefault, nextPageCharacters);
    expect(updateState.currentPageCharacters).toBe(
      mockDefault.currentPageCharacters
    );
  });

  test("When the user triggers the planets next page action and the actual page is the higher, then the pagination shouldn't change", () => {
    const nextPagePlanets: AppActions = {
      type: ActionTypes.NEXT_PAGE_PLANETS,
      payload: 5,
    };
    const updateState = appReducer(mockDefault, nextPagePlanets);
    expect(updateState.currentPagePlanets).toBe(mockDefault.currentPagePlanets);
  });

  test("When the user triggers the characters previous page action and the actual page is the lowest, then the pagination shouldn't change", () => {
    const prevPageCharacters: AppActions = {
      type: ActionTypes.PREV_PAGE_CHARACTERS,
    };

    const updateState = appReducer(mockMinimumPages, prevPageCharacters);
    expect(updateState.currentPageCharacters).toBe(
      mockMinimumPages.currentPageCharacters
    );
  });

  test("When the user triggers the planets previous page action and the actual page is the lowest, then the pagination shouldn't change", () => {
    const prevPagePlanets: AppActions = {
      type: ActionTypes.PREV_PAGE_PLANETS,
    };
    const updateState = appReducer(mockMinimumPages, prevPagePlanets);
    expect(updateState.currentPagePlanets).toBe(
      mockMinimumPages.currentPagePlanets
    );
  });

  test("When the reducer receives GET_CHARACTER_DETAILS action, then the state should change with the selected character", () => {
    const characterDetailsAction: AppActions = {
      type: ActionTypes.GET_CHARACTER_DETAILS,
      payload: mockCharacters.characters[0],
    };
    const updateState = appReducer(mockDefault, characterDetailsAction);
    expect(updateState.characterDetails).toEqual(mockCharacters.characters[0]);
  });

  test("When the reducer receives GET_PLANET_DETAILS action, then the state should change with the selected planet", () => {
    const planetDetailsAction: AppActions = {
      type: ActionTypes.GET_PLANET_DETAILS,
      payload: mockPlanets.planets[0],
    };
    const updateState = appReducer(mockDefault, planetDetailsAction);
    expect(updateState.planetDetails).toEqual(mockPlanets.planets[0]);
  });

  test("When the user wants to see it's favorite characters, then the favorite characters state should be called", () => {
    const getFavCharac: AppActions = {
      type: ActionTypes.GET_FAV_CHARACTERS,
    };
    const updateState = appReducer(mockPlanets, getFavCharac);
    expect(updateState).toEqual(mockPlanets);
  });

  test("When the user adds a character to favorites, then the favorites state should add the expected character", () => {
    const addFavCharac: AppActions = {
      type: ActionTypes.ADD_FAV_CHARACTER,
      payload: mockDefault.favCharacter,
    };
    expect(mockDefault.favCharacters).toHaveLength(1);
    const updateState = appReducer(mockDefault, addFavCharac);
    expect(updateState.favCharacters).toHaveLength(2);
  });

  test("When the user changes a character's name, then it should change in the global state", () => {
    const changeFavCharacName: AppActions = {
      type: ActionTypes.CHANGE_FAV_CHARACTER_NAME,
      payload: [1, "Morty Smith"],
    };
    expect(mockDefault.favCharacters[0].name).toEqual("Rick Sanchez");
    const updateState = appReducer(mockDefault, changeFavCharacName);
    expect(updateState.favCharacters[0].name).toEqual("Morty Smith");
  });

  test("When the user tryies to set a character's name but the id isn't on it's favorite characters, then global state shouldn't change", () => {
    const setFavCharacRating: AppActions = {
      type: ActionTypes.CHANGE_FAV_CHARACTER_NAME,
      payload: [5, "Morty Smith"],
    };
    const updateState = appReducer(mockDefault, setFavCharacRating);
    expect(updateState.favCharacters[0].name).toEqual("Rick Sanchez");
  });

  test("When the user sets a character's rating, then it should change in the global state", () => {
    const setFavCharacRating: AppActions = {
      type: ActionTypes.SET_FAV_CHARACTER_RATING,
      payload: [1, 5],
    };
    expect(mockDefault.favCharacters[0].rating).toEqual(3);
    const updateState = appReducer(mockDefault, setFavCharacRating);
    expect(updateState.favCharacters[0].rating).toEqual(5);
  });

  test("When the user tryies to set a character's rating but the id isn't on it's favorite characters, then global state shouldn't change", () => {
    const setFavCharacRating: AppActions = {
      type: ActionTypes.SET_FAV_CHARACTER_RATING,
      payload: [5, 2],
    };
    const updateState = appReducer(mockDefault, setFavCharacRating);
    expect(updateState.favCharacters[0].rating).toEqual(3);
  });

  test("When the user removes a character, then it should change in the global state", () => {
    const removeFavCharac: AppActions = {
      type: ActionTypes.REMOVE_FAV_CHARACTER,
      payload: 1,
    };
    expect(mockDefault.favCharacters).toHaveLength(1);
    const updateState = appReducer(mockDefault, removeFavCharac);
    expect(updateState.favCharacters).toHaveLength(0);
  });
});
