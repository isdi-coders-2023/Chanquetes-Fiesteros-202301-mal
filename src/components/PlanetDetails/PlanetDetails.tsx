import { FC } from "react";
import { CharactersInterface } from "../../types/appInterfaces";
import CharacterList from "../CharacterList/CharacterList";
import Pagination from "../Pagination/Pagination";
import "./PlanetDetails.css";

interface PlanetDetailsProps {
  characters: CharactersInterface[];
}

const PlanetDetails: FC<PlanetDetailsProps> = ({ characters }) => {
  return (
    <article className="planet-details__container">
      <section className="p-d-container__info">
        <div className="p-d-info__sprite">
          <img src={`./assets/img/planet-${"1"}.png`} alt={`planet-${"..."}`} />
        </div>
        <div className="p-d-info__text">
          <h1>Details</h1>
          <div className="info-text__data">
            <p role={"paragraph"}>Planet:</p>
            <span>{"..."}</span>
            <p role={"paragraph"}>Type:</p>
            <span>{"..."}</span>
            <p role={"paragraph"}>Dimension:</p>
            <span>{"..."}</span>
            <p role={"paragraph"}>Created:</p>
            <span>{"..."}</span>
          </div>
        </div>
      </section>
      <section className="p-d-container__characters">
        <h1>Residents</h1>
        <div className="p-d-characters__residents">
          <ul className="residents__list">
            <CharacterList characters={characters} />
          </ul>
        </div>
        <Pagination />
      </section>
    </article>
  );
};

export default PlanetDetails;
