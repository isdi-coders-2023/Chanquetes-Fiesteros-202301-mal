import { FC } from "react";
import { CharacterInterface } from "../../types/appInterfaces";

interface CharacterDetailsProps {
  character: CharacterInterface;
}

const CharacterDetails: FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <>
      <h1 data-testid="character-id">{character.name}</h1>
    </>
  );
};

export default CharacterDetails;
