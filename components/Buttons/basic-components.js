import styled from "styled-components";

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  cursor: pointer;
  &:focus {
    &:not(:focus-visible) {
      outline: none;
    }
  }
`;

//redundant for now
export const IconButton = styled(Button)`
  margin: 0;
  padding: 0;
  background: none;
  &:focus {
    &:not(:focus-visible) {
      outline: none;
    }
  }
`;

export const StickyButton = styled(Button)`
  position: fixed;
  top: ${({ top }) => top || undefined};
  bottom: ${({ bottom }) => bottom || undefined};
  left: ${({ left }) => left || undefined};
  right: ${({ right }) => right || undefined};
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  height: ${({ height }) => height || undefined};
  width: ${({ width }) => width || undefined};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: transform 0.2s, visibility 0.2s, opacity 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
