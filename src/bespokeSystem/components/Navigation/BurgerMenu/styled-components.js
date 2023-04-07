import styled from "styled-components";

const toggleDuration = ".5s";
const toggleEasing = "ease-in-out";
const delayOut = "2s";
const count = 4; //count of menu a's and menu headers
var groupLength = Math.ceil(count / 3); //dunno what this is
var groupNumber = 0;
var i = 1;

export const Menu = styled.nav`
  //if closed:
  /* transform: ${({ closed, top }) =>
    closed
      ? `translateY(calc(${top} * -1)) scaleY(0.1)
    scaleX(0.2)`
      : undefined};

  transition: transform ${toggleDuration} ${toggleEasing};
  transition-delay: ${({ delayIn }) => delayIn}; */

  box-sizing: border-box;
  color: #333;
  font-size: 100%;
  line-height: 1.5;
  position: relative;
  width: 200px;
  margin: 20px;
  .Anchor {
    display: block;
    text-decoration: none;
    background: #fff;
    /* transform-origin: 0 0;
    transition: transform ${toggleDuration} ${toggleEasing},
      color ${toggleDuration} ${toggleEasing};
    transition-delay: ${delayOut}; */
    border-radius: 4px;
    padding: 1em 1.52em;
    &:hover {
      background: #efefef;
    }
  }
`;

export const MainHeader = styled.header`
  font-weight: 600;
  display: block;
  background: rgba(255, 0, 0, 0.5);
  /* transform-origin: 0 0;
  transition: transform ${toggleDuration} ${toggleEasing},
    color ${toggleDuration} ${toggleEasing};
  transition-delay: ${delayOut}; */
  border-radius: 4px;
  padding: 1em 1.52em;
  span {
    border: none;
    background: transparent;
    font-size: 1.5em;
    padding: 0;
    cursor: pointer;
    line-height: 1;
    float: right;
  }
`;

export const Group = styled.li`
  transform: ${({ closed, index }) =>
    closed
      ? `translateY(calc(${index}px * -1)) scaleY(0.1)
    scaleX(0.2)`
      : undefined};

  transition: transform ${toggleDuration} ${toggleEasing};
  transition-delay: ${({ closed, index }) =>
    closed ? `${(index - 1) * 0.2}s` : `${(3 - index - 1) * 0.2}s`};
`;
export const GroupItem = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const MainList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: -4px 0 0 0;
`;

export const SubList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
  .Anchor {
    font-size: 0.9em;
    color: #666;
    border-left: 2em solid white;
    padding: 0.75em;
    background: linear-gradient(to right, #ddd 2px, #fff 2px);
  }
`;

export const Anchor = styled.a`
  //submenu anchors
  font-size: ${({ isSubAnchor }) => (isSubAnchor ? `0.9em` : undefined)};
  color: ${({ isSubAnchor }) => (isSubAnchor ? `#666` : undefined)};
  border-left: ${({ isSubAnchor }) =>
    isSubAnchor ? `2em solid white` : undefined};
  padding: ${({ isSubAnchor }) => (isSubAnchor ? `0.75em` : undefined)};
  background: ${({ isSubAnchor }) =>
    isSubAnchor ? `linear-gradient(to right, #ddd 2px, #fff 2px)` : "#fff"};
  //all anchors
  display: block;
  text-decoration: none;
  /* transform-origin: 0 0;
  transition: transform ${toggleDuration} ${toggleEasing},
    color ${toggleDuration} ${toggleEasing};
  transition-delay: ${delayOut}; */
  border-radius: 4px;
  padding: 1em 1.52em;
  &:hover {
    background: #efefef;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  border: none;
  padding: calc("1em - 2px");
  width: 100%;
  /* transform-origin: 0 0;
  transition: transform ${toggleDuration} ${toggleEasing};
  transition-delay: calc(${toggleDuration} + (0.1s * (${count} / 2))); */
  cursor: pointer;
  outline: none;
  background: #cdcdcd;
  /* opacity: 0; */
`;
