import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./CharacterCard.css";
import { FC } from "react";
import { CharacterInterface } from "../../types/appInterfaces";
import { Link } from "react-router-dom";

interface CharacterCardProps {
  character: CharacterInterface;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <article className="characters-card__container">
      <section className="characters-card__img-and-fav">
        <FontAwesomeIcon className="fav-icon" icon={solid("star")} />
        <img src={character.image} alt={`avatar of ${character.name}`} />
      </section>
      <section className="characters-card__info">
        <Link to={"./"}>
          <button type="button">Go</button>
        </Link>
        <div className="characters-card-info__data">
          <p role={"paragraph"}>Name:</p>
          <span>{character.name}</span>
          <p>Status:</p>
          <span>{character.status}</span>
        </div>
      </section>
    </article>
  );
};

export default CharacterCard;
