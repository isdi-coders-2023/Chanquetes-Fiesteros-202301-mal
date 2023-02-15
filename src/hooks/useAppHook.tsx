import { useContext } from "react";
import { getCharactersData, getPlanetsData } from "../api/data";
import { ActionTypes } from "../store/actions/actions";
import AppContext from "../store/contexts/app.context";
import { AppActions } from "../store/actions/actions";

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

  const getCharactersList = async () => {
    const charactersData = await getCharactersData([]);
    const initializePlanetsAction = {
      type: ActionTypes.INITIALIZE_PLANETS,
      payload: charactersData,
    };
    dispatch(initializePlanetsAction as AppActions);
  };

  return { state, getPlanetsList, getCharactersList };
};

export default useAppHook;
