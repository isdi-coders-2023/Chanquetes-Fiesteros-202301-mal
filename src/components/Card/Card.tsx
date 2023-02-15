import "./Card.css";

const Card = () => {
  return (
    <main className="main__cont">
      <article className="main-cont__rowplanets">
        <div className="rowPlanets__card">
          <div className="rowPlanets-card__img">
            <div className="card__rating">
              <img src="./assets/star.png" alt="star-rating" />
            </div>
            <img src="./assets/planet-3-3.png" alt="planet-1-4" />
          </div>
          <div className="rowPlanets-card__info">
            <div className="planets-card-info__go">Go</div>
            <p>Name:</p>
            <p>Status:</p>
            <p role="paragraph">Dimension</p>
            <div className="card-info__lowBlock"></div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Card;
