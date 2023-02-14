import { FC, Reducer, useReducer } from "react";
import {
  CharactersInterface,
  PlanetInterface,
} from "../../types/app-interfaces";
import { AppActions } from "../actions/actions";
import appReducer from "../reducers/appReducer";
import AppContext from "./app.context";

interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface AppState {
  planets: PlanetInterface[];
  characters: CharactersInterface[];
}

const AppProvider: FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<AppState, AppActions>>(
    appReducer,
    { planets: [], characters: [] }
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
