import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Title } from "../../components/Title/Title";
import "./FavoritesPage.css";

const Favorites = () => {
  return (
    <>
      <section className="favorites__container">
        <Title text="Favorites" />
        <button className="favorites__filter-btn">
          <FontAwesomeIcon icon={solid("earth-americas")} />
          Search by planet
          <FontAwesomeIcon icon={solid("angle-down")} />
        </button>
      </section>
    </>
  );
};

export default Favorites;
