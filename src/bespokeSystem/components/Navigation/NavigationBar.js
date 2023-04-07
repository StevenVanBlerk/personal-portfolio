import styled from 'styled-components'

const NodeOuter = styled.li`
  background-color: lightblue;
  cursor: pointer;
`
const NodeInner = styled.a``
const Node = ({ label, href }) => {
  return (
    <NodeOuter>
      <NodeInner href={href}>{label}</NodeInner>
    </NodeOuter>
  )
}

const NavBar = styled.nav`
  background-color: lightgreen;
  width: fit-content;
  text-align: left;
`
//sticky navbar -> https://dev.to/ibrahima92/build-a-sticky-navigation-bar-with-react-3bjh
export const NavigationBar = () => {
  return (
    <NavBar>
      <ul>
        <Node label="Home" href="/home" />
        <li>
          components
          <ul>
            <Node label="Games" href="/games" />
            <li>
              Layout
              <ul>
                <li className="navbar--item">
                  <a href="/games">Accordion</a>
                </li>
                <Node label="Accordion" href="/layout/accordion" />
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
    </NavBar>
  )
}
