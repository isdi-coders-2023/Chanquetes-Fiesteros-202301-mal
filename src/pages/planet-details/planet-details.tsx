import { useEffect } from "react";
import useAppHook from "../../hooks/useAppHook";
import PlanetDetails from "../../components/PlanetDetails/PlanetDetails";

const Characters = () => {
  const { state, getCharactersList } = useAppHook();

  useEffect(() => {
    getCharactersList([1, 2, 3]);
  }, [getCharactersList]);

  return (
    <>
      <PlanetDetails characters={state.characters} />
    </>
  );
};

export default Characters;
