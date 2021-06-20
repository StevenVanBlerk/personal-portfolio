import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Center = styled.div`
  margin: ${({ margin }) => margin || "auto"};
  height: ${({ height }) => height || "fit-content"};
  width: ${({ width }) => width || "fit-content"};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 10px;
`;

export const Card = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  width: ${({ width }) => width || "300px"};
  height: ${({ height }) => height || "550px"};
  background: ${({ background }) => background || colors.LIGHT_CHARCOAL};
  border: ${({ border }) => border || `5px solid ${colors.DARK_CHARCOAL}`};
  border-radius: ${({ borderRadius }) => borderRadius || "3px"};
`;

export const FloatOnHoverCard = styled(Card)`
  transition: all 1s ease;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

export const DimensionContainer = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
