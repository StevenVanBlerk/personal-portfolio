import styled from "styled-components";

export const PictorialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 13px;
`;

export const Icon = styled.img`
  opacity: ${({ filled }) => (filled ? 1 : 0.2)};
`;
