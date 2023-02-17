import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./CharacterCard.css";
import { FC } from "react";
import { CharactersInterface } from "../../types/appInterfaces";

interface CharacterCardProps {
  characters: CharactersInterface;
}

const CharacterCard: FC<CharacterCardProps> = ({ characters }) => {
  return (
    <article className="characters-card__container">
      <section className="characters-card__img-and-fav">
        <FontAwesomeIcon className="fav-icon" icon={solid("star")} />
        <img src={characters.image} alt={`avatar of ${characters.name}`} />
      </section>
      <section className="characters-card__info">
        <button type="button">Go</button>
        <div className="characters-card-info__data">
          <p role={"paragraph"}>Name:</p>
          <span>{characters.name}</span>
          <p>Status:</p>
          <span>{characters.status}</span>
        </div>
      </section>
    </article>
  );
};

export default CharacterCard;
