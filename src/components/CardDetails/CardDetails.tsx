import "../CardDetails/CardDetails.css";

const CardDetails = () => {
  return (
    <div className="character__container">
      <img className="character__planet" src="./assets/planet-2.png" alt="" />
      <img className="character__img" src="./assets/1.jpeg" alt="" />
      <div className="character__info-block">
        <div className="character__info">
          <h1 className="character__name">Rick Sanchez</h1>
          <div className="character_line"></div>
          <ul className="character__type">
            <li>Status:</li>
            <li>Specis:</li>
            <li>Type:</li>
            <li>Gender:</li>
            <li>Origin:</li>
          </ul>
        </div>
        <div className="character_icons">
          <img src="./assets/gun.png" alt="" />
          <img src="./assets/astro.png" alt="" />
          <img src="./assets/planet-icon.png" alt="" />
          <img src="./assets/rockect.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
