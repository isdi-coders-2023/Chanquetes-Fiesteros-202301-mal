import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Pagination.css";

const Pagination = () => {
  return (
    <div className="pagination__container" data-testid="pag-container">
      <FontAwesomeIcon
        className="pagination__item"
        icon={solid("angle-left")}
      />
      <FontAwesomeIcon
        className="pagination__item"
        icon={solid("angle-right")}
      />
    </div>
  );
};

export default Pagination;
