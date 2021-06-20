import styled from "styled-components";
import { colors } from "../../constants/colors";

//Flexible container that acts as the foundation for all containers
export const Container = styled.div`
  display: ${({ display }) => display};
  position: ${({ position }) => position};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};

  grid-gap: ${({ gridGap }) => gridGap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  justify-self: ${({ justifySelf }) => justifySelf};
  place-content: ${({ placeContent }) => placeContent};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize};
  vertical-align: ${({ verticalAlign }) => verticalAlign};

  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
`;

//------GRIDS------\\
export const Grid = styled(Container)`
  display: grid;
`;
export const FlowingGrid = styled(Grid)`
  //minmax only matters for extreme edge case of extremely narrow screen
  grid-template-columns: ${({ columnMaxWidth = "250px" }) =>
    `repeat(auto-fit, minmax(0px, ${columnMaxWidth}))`};

  grid-gap: ${({ gridGap }) => gridGap || "1rem"};

  /* using max-width to allow for specifying a max column count (optional) */
  max-width: ${({ maxColumns, columnMaxWidth, gridGap = "1rem" }) =>
    maxColumns
      ? `calc((${columnMaxWidth} * ${maxColumns}) + (${gridGap} * (${maxColumns} - 1)))`
      : undefined};
`;

//------FLEX CONTAINERS------\\
const FlexContainer = styled(Container)`
  display: flex;
`;
export const VContainer = styled(FlexContainer)`
  flex-direction: column;
`;
///////////////////old crap

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
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
