import "./Header.css";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header-cont__logo">
        <img src="./assets/logo.png" alt="rick and morty logo" />
      </div>
      <input type="checkbox" id="hamb-menu" />
      <label htmlFor="hamb-menu">
        <img src="./assets/hamb-menu.svg" alt="" />
      </label>
      <nav className="header-cont__navbar">
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">Favorites</a>
          </li>
          <li>
            <a href="./">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
