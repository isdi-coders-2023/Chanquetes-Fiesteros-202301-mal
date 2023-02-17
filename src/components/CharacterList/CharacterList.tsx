import { FC } from "react";
import { CharactersInterface } from "../../types/appInterfaces";
import CharacterCard from "../CharacterCard/CharacterCard";

interface CharacterListProps {
  characters: CharactersInterface[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <ul>
      {characters.map((character, i) => (
        <li key={i}>
          <CharacterCard characters={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
