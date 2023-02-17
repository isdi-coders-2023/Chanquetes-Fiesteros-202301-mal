import { useCallback, useContext } from "react";
import { getCharactersData, getPlanetsData } from "../api/data";
import { ActionTypes, AppActions } from "../store/actions/actions";
import AppContext from "../store/contexts/app.context";

const useAppHook = () => {
  const { state, dispatch } = useContext(AppContext);

  const getPlanetsList = useCallback(
    async (planets: number[]) => {
      const planetsData = await getPlanetsData(planets);
      const initializePlanetsAction: AppActions = {
        type: ActionTypes.INITIALIZE_PLANETS,
        payload: planetsData,
      };
      dispatch(initializePlanetsAction);
    },
    [dispatch]
  );

  const getCharactersList = useCallback(
    async (characters: number[]) => {
      const charactersData = await getCharactersData(characters);
      const initializeCharactersAction: AppActions = {
        type: ActionTypes.INITIALIZE_CHARACTERS,
        payload: charactersData,
      };
      dispatch(initializeCharactersAction);
    },
    [dispatch]
  );

  return { state, getPlanetsList, getCharactersList };
};

export default useAppHook;
