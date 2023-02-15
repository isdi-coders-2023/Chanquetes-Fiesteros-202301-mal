import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__cont">
      <img
        className="footer-cont__logo"
        src="./assets/logo.svg"
        alt="rick-and-morty-logo"
      />
      <nav className="footer-cont__navbar">
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">Favorite</a>
          </li>
          <li>
            <a href="./">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="social__container">
        <p role="paragraph" className="social-container__title">
          Developers Github
        </p>
        <ul className="social-container">
          <li>
            <a href="./">
              <img
                className="social-container__logo"
                src="./assets/github-logo.png"
                alt="github-logo"
              />
            </a>
          </li>
          <li>
            <a href="./">
              <img
                className="social-container__logo"
                src="./assets/github-logo.png"
                alt="github-logo"
              />
            </a>
          </li>
          <li>
            <a href="./">
              <img
                className="social-container__logo"
                src="./assets/github-logo.png"
                alt="github-logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
