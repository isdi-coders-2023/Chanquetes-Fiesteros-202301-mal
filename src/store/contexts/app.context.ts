import { createContext, Dispatch } from "react";
import { AppActions } from "../actions/actions";
import { AppState } from "../../types/appInterfaces";

interface AppContextProps {
  state: AppState;
  dispatch: Dispatch<AppActions>;
}

const AppContext = createContext<AppContextProps>({
  state: {
    planets: [],
    characters: [],
    currentPagePlanets: 1,
    currentPageCharacters: 1,
  },
  dispatch: () => {},
});

export default AppContext;
