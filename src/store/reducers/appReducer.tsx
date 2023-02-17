import { ActionTypes, AppActions } from "../actions/actions";
import {
  AppState,
  CharactersInterface,
  PlanetInterface,
} from "../../types/appInterfaces";

const appReducer = (state: AppState, action: AppActions): AppState => {
  const { pagination } = state;

  let allPlanets: PlanetInterface[] = [];
  let allCharacters: CharactersInterface[] = [];

  switch (action.type) {
    // Plantes actions
    case ActionTypes.INITIALIZE_PLANETS:
      allPlanets = action.payload;
      return { ...state, planets: allPlanets };
    case ActionTypes.REMOVE_PLANET:
      const newPlanets = allPlanets.filter(
        (planet) => planet.id !== action.payload
      );
      return { ...state, planets: newPlanets };

    // Characters actions
    case ActionTypes.INITIALIZE_CHARACTERS:
      allCharacters = action.payload;
      return { ...state, characters: allCharacters };
    case ActionTypes.REMOVE_CHARACTER:
      const newCharacters = allCharacters.filter(
        (character) => character.id !== action.payload
      );
      return { ...state, characters: newCharacters };

    // Pagination actions
    case ActionTypes.GO_TO_NEXT_PAGE:
      return pagination < action.payload
        ? { ...state, pagination: pagination + 1 }
        : { ...state, pagination: pagination };
    case ActionTypes.GO_TO_PREV_PAGE:
      return pagination > 1
        ? { ...state, pagination: pagination - 1 }
        : { ...state, pagination: pagination };

    default:
      return state;
  }
};

export default appReducer;
