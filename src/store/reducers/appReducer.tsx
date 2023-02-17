import { ActionTypes, AppActions } from "../actions/actions";
import { AppState } from "../../types/appInterfaces";

const appReducer = (state: AppState, action: AppActions): AppState => {
  const {
    planets,
    characters,
    currentPagePlanets: planetsPages,
    currentPageCharacters: charactersPages,
  } = state;

  switch (action.type) {
    // Plantes actions
    case ActionTypes.GET_PLANETS:
      return { ...state, planets: action.payload };
    case ActionTypes.REMOVE_PLANET:
      const newPlanets = planets.filter(
        (planet) => planet.id !== action.payload
      );
      return { ...state, planets: newPlanets };
    case ActionTypes.NEXT_PAGE_PLANETS:
      return planetsPages < action.payload
        ? { ...state, currentPagePlanets: planetsPages + 1 }
        : { ...state, currentPagePlanets: planetsPages };
    case ActionTypes.PREV_PAGE_PLANETS:
      return planetsPages > 1
        ? { ...state, currentPagePlanets: planetsPages - 1 }
        : { ...state, currentPagePlanets: planetsPages };

    // Characters actions
    case ActionTypes.GET_CHARACTERS:
      return { ...state, characters: action.payload };
    case ActionTypes.REMOVE_CHARACTER:
      const newCharacters = characters.filter(
        (character) => character.id !== action.payload
      );
      return { ...state, characters: newCharacters };
    case ActionTypes.NEXT_PAGE_CHARACTERS:
      return charactersPages < action.payload
        ? { ...state, currentPageCharacters: charactersPages + 1 }
        : { ...state, currentPageCharacters: charactersPages };
    case ActionTypes.PREV_PAGE_CHARACTERS:
      return charactersPages > 1
        ? { ...state, currentPageCharacters: charactersPages - 1 }
        : { ...state, currentPageCharacters: charactersPages };

    default:
      return state;
  }
};

export default appReducer;
