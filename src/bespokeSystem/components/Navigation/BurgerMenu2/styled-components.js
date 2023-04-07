import styled from "styled-components";
import { colors } from "@/designSystem/constants/colors";

const translateDuration = "0.3s";
export const Menu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  transform: ${({ closed }) => (closed ? `translateX(300px)` : undefined)};
  transition: transform ${translateDuration};
  /* box-sizing: border-box; */
  /* color: #333; */
  /* font-size: 100%; */
  /* line-height: 1.5; */
  min-height: 100%;
  z-index: 100;
  background: ${colors.WHITE};
`;

export const MainHeader = styled.header`
  position: relative;
  background: ${colors.LIGHT_GREEN};
  border-radius: 4px;
  padding: 1em 1.5em;
  text-align: left;
`;
export const HeaderText = styled.span`
  color: ${colors.CHARCOAL};
  font-size: 1.2em;
  font-weight: 600;
`;

export const MainList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const RetractingPanel = styled.li`
  list-style: none;
  /* margin: -4px 0 0 0; */
  transform: ${({ closed }) => (closed ? `translateX(100%)` : undefined)};
  transition: ${translateDuration};
  transition-delay: ${({ closed, index }) =>
    closed ? undefined : `calc(${index} * 0.1s)`};
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
  }
`;

export const Anchor = styled.a`
  //situational
  font-size: ${({ isSubAnchor }) => (isSubAnchor ? `0.9em` : undefined)};
  color: ${({ isSubAnchor }) =>
    isSubAnchor ? colors.LIGHT_CHARCOAL : colors.CHARCOAL};
  text-align: ${({ isSubAnchor }) => (isSubAnchor ? "center" : "left")};
  //all anchors
  cursor: pointer;
  display: block;
  text-decoration: none;
  border-radius: 4px;
  padding: 1em 1.52em;
  &:hover {
    background: ${colors.BRIGHT_CHARCOAL};
    text-decoration: underline;
  }
`;

const IconButton = styled.button`
  cursor: pointer;
  background: none;
  outline: none; //temp
  border: none;
  padding: 0;
  margin: 0;
`;
export const BurgerButton = styled(IconButton)`
  position: fixed;
  right: 20px;
  top: 20px;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: 1.5em;
  top: 50%;
  transform: translateY(-50%);
  height: fit-content;
  width: fit-content;
`;

export const BurgerIcon = styled.img`
  transition: transform 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;

export const Icon = styled.img`
  margin-right: 12px;
  padding: 0;
  border: none;
  outline: none;
  height: 100%;
`;
export const IconPlaceholder = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  display: inline-block;
`;
