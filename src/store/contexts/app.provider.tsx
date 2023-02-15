import { FC, Reducer, useReducer } from "react";
import { AppActions } from "../actions/actions";
import { AppState } from "../../types/appInterfaces";
import appReducer from "../reducers/appReducer";
import AppContext from "./app.context";

interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
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
