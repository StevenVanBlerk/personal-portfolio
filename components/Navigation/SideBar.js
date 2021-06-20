// import "./styles.css";

//sticky navbar -> https://dev.to/ibrahima92/build-a-sticky-navigation-bar-with-react-3bjh
export const SideBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar--item">
          <a href="/home">Home</a>
        </li>
        <li>
          components
          <ul>
            <li className="navbar--item">
              <a href="/games">Games</a>
            </li>
            <li>
              Layout
              <ul>
                <li className="navbar--item">
                  <a href="/games">Accordion</a>
                </li>
                <li className="navbar--item">
                  <a href="/games">Masonry/Tiled Grid</a>
                </li>
              </ul>
            </li>
            <li>
              Inputs
              <ul>
                <li className="navbar--item">
                  <a href="/games">Search Bar</a>
                </li>
              </ul>
            </li>
            <li>
              Other
              <ul>
                <li className="navbar--item">
                  <a href="/games">Instagram Feed</a>
                </li>
              </ul>
            </li>
            <li>
              Loading Effects
              <ul>
                <li className="navbar--item">
                  <a href="/games">Spinner</a>
                </li>
                <li className="navbar--item">
                  <a href="/games">Shadow</a>
                </li>
                <li className="navbar--item">
                  <a href="/games">Bar</a>
                </li>
              </ul>
            </li>
            <li>
              Navigation
              <ul>
                <li className="navbar--item">
                  <a href="/games">Navbar</a>
                </li>
                <li className="navbar--item">
                  <a href="/games">Sidebar</a>
                </li>
                <li className="navbar--item">
                  <a href="/games">
                    Contents Bar (Bar on side indicating page chapter of page)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="navbar--item">
          <a href="/hire-me">Hire Me</a>
        </li>
        <li className="navbar--item">
          <a href="/hire-my-friends">Hire My Friends</a>
        </li>
      </ul>
    </nav>
  );
};
