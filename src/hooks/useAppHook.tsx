import { useContext } from "react";
import { getCharactersData, getPlanetsData } from "../api/data";
import { ActionTypes, AppActions } from "../store/actions/actions";
import AppContext from "../store/contexts/app.context";

const useAppHook = () => {
  const { state, dispatch } = useContext(AppContext);

  const getPlanetsList = async (planets: number[]) => {
    const planetsData = await getPlanetsData(planets);
    const initializePlanetsAction = {
      type: ActionTypes.INITIALIZE_PLANETS,
      payload: planetsData,
    };
    dispatch(initializePlanetsAction as AppActions);
  };

  const getCharactersList = async (characters: number[]) => {
    const charactersData = await getCharactersData(characters);
    const initializeCharactersAction = {
      type: ActionTypes.INITIALIZE_CHARACTERS,
      payload: charactersData,
    };
    dispatch(initializeCharactersAction as AppActions);
  };

  return { state, getPlanetsList, getCharactersList };
};

export default useAppHook;
