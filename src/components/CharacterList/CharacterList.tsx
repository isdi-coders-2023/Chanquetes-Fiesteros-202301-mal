import { FC } from "react";
import { CharacterInterface } from "../../types/appInterfaces";
import CharacterCard from "../CharacterCard/CharacterCard";
import Pagination from "../Pagination/Pagination";
import "./CharacterList.css";

interface CharacterListProps {
  characters: CharacterInterface[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <article className="characters__container">
      <h1>Characters</h1>
      <Pagination typeOfPagination={"characters"} />
      <ul className="characters__list">
        {characters.map((character) => (
          <li key={`${character.id}-${character.name}`}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      <Pagination typeOfPagination={"characters"} />
    </article>
  );
};

export default CharacterList;
