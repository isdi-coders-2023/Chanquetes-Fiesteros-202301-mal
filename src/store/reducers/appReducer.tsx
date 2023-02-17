import { ActionTypes, AppActions } from "../actions/actions";
import { AppState } from "../../types/appInterfaces";

const appReducer = (state: AppState, action: AppActions): AppState => {
  const { characters, planets, pagination } = state;

  switch (action.type) {
    // Plantes actions
    case ActionTypes.INITIALIZE_PLANETS:
      return { ...state, planets: action.payload };
    case ActionTypes.REMOVE_PLANET:
      const newPlanets = planets.filter(
        (planet) => planet.id !== action.payload
      );
      return { ...state, planets: newPlanets };

    // Characters actions
    case ActionTypes.INITIALIZE_CHARACTERS:
      return { ...state, characters: action.payload };
    case ActionTypes.REMOVE_CHARACTER:
      const newCharacters = characters.filter(
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
