import { ActionTypes, AppActions } from "../actions/actions";
import { AppState } from "../../types/appInterfaces";

const appReducer = (state: AppState, action: AppActions): AppState => {
  const { planets, characters } = state;

  switch (action.type) {
    case ActionTypes.INITIALIZE_PLANETS:
      return { ...state, planets: action.payload };
    case ActionTypes.REMOVE_PLANET:
      const newPlanets = planets.filter(
        (planet) => planet.id !== action.payload
      );
      return { ...state, planets: newPlanets };

    case ActionTypes.INITIALIZE_CHARACTERS:
      return { ...state, characters: action.payload };
    case ActionTypes.REMOVE_CHARACTER:
      const newCharacters = characters.filter(
        (character) => character.id !== action.payload
      );
      return { ...state, characters: newCharacters };

    default:
      return state;
  }
};

export default appReducer;
