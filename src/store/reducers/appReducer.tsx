import { ActionTypes, AppActions } from "../actions/actions";
import { AppState } from "../../types/appInterfaces";

const appReducer = (state: AppState, action: AppActions): AppState => {
  const {
    planets,
    characters,
    currentPagePlanets: planetsPages,
    currentPageCharacters: charactersPages,
    favCharacters,
  } = state;

  switch (action.type) {
    // Planets actions
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
    case ActionTypes.GET_PLANET_DETAILS:
      return { ...state, planetDetails: action.payload };

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
    case ActionTypes.GET_CHARACTER_DETAILS:
      return { ...state, characterDetails: action.payload };

    // Favorite characters actions
    case ActionTypes.GET_FAV_CHARACTERS:
      return { ...state, ...favCharacters };
    case ActionTypes.ADD_FAV_CHARACTER:
      return { ...state, favCharacters: [...favCharacters, action.payload] };
    case ActionTypes.CHANGE_FAV_CHARACTER_NAME:
      const [id, name] = action.payload;
      const updatedFavCharactersName = favCharacters.map((character) => {
        if (character.id === id) {
          return { ...character, name };
        }
        return character;
      });
      return { ...state, favCharacters: updatedFavCharactersName };
    case ActionTypes.SET_FAV_CHARACTER_RATING:
      const [rating] = action.payload;
      const updatedFavCharactersRating = favCharacters.map((character) => {
        if (character.id === id) {
          return { ...character, rating };
        }
        return character;
      });
      return { ...state, favCharacters: updatedFavCharactersRating };
    case ActionTypes.REMOVE_FAV_CHARACTER:
      const updatedFavCharacters = favCharacters.filter(
        (character) => character.id !== action.payload
      );
      return { ...state, favCharacters: updatedFavCharacters };

    default:
      return state;
  }
};

export default appReducer;
