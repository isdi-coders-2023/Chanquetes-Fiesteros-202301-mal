import { createContext, Dispatch } from "react";
import { AppActions } from "../actions/actions";
import { AppState } from "./app.provider";

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<AppActions>;
}

const AppContext = createContext<AppContextProps>({
  state: { planets: [], characters: [] },
  dispatch: () => {},
});

export default AppContext;
