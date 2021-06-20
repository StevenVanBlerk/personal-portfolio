import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Typography = styled.p`
  display: ${({ display }) => display};
  position: ${({ position }) => position};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  background: ${({ background }) => background};
  opacity: ${({ opacity }) => opacity};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  line-height: ${({ lineHeight }) => lineHeight};
  word-wrap: ${({ wordWrap }) => wordWrap};

  font-family: ${({ fontFamily }) =>
    fontFamily || "Verdana, Geneva, Tahoma, sans-serif"};
  color: ${({ color }) => color || colors.SMOKE};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  text-decoration: ${({ textDecoration }) => textDecoration};
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  text-shadow: ${({ textShadow }) => textShadow};

  transform: ${({ transform }) => transform};
  transition: ${({ transition }) => transition};
`;

export const PageTitle = styled((props) => <Typography as="h1" {...props} />)`
  text-align: center;
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
  /* font-size: 36px; */
`;
export const Subtitle = styled((props) => <Typography as="h2" {...props} />)`
  /* font-size: 30px; */
`;

export const CardTitle = styled((props) => <Typography as="h3" {...props} />)`
  /* font-size: 30px; */
`;
