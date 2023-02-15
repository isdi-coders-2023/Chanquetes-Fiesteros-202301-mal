import "../Error404/Error404.css";
const Error404 = () => {
  return (
    <div className="error__container">
      <h1 className="error__title">Error 404</h1>
      <div className="error__text-block">
        <p className="error__text">
          Don’t worry my friend, not an alien penis...<br></br>
          <a className="error__text--hover" href="./">
            Flip the pickle.
          </a>
        </p>
        <img
          className="error__img"
          src="./assets/pickle-rick-vectorize.svg"
          alt="Picke-Rick"
        />
      </div>
    </div>
  );
};

export default Error404;
