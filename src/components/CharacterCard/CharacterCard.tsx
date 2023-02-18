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
    <Link to={`/characters/${character.id}`}>
      <article className="characters-card__container">
        <section className="characters-card__img-and-fav">
          <span>#{character.id}</span>
          <FontAwesomeIcon className="fav-icon" icon={solid("star")} />
          <img src={character.image} alt={`avatar of ${character.name}`} />
        </section>
        <section className="characters-card__info">
          <h2 className="character__name">{character.name}</h2>
          <div className="character__other-data">
            <p>Specie:</p>
            <span>- {character.species}</span>
            <p role={"paragraph"}>Status:</p>
            <span>- {character.status}</span>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default CharacterCard;
