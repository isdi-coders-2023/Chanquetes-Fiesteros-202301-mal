import { FC } from "react";
import { CharacterInterface } from "../../types/appInterfaces";
import { Title } from "../Title/Title";

interface CharacterDetailsProps {
  character: CharacterInterface;
}

const CharacterDetails: FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <>
      <article>
        <section>
          <Title text={`${character.name}`} />
        </section>
      </article>
    </>
  );
};

export default CharacterDetails;
