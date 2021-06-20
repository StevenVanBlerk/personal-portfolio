import styled from "styled-components";
import { colors } from "../../constants/colors";
export const Typography = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ color }) => color || colors.SMOKE};
`;
export const PageTitle = styled.h1`
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ color }) => color || colors.SMOKE};
`;

export const Subtitle = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ color }) => color || colors.SMOKE};
`;

export const CardTitle = styled.h3`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ color }) => color || colors.SMOKE};
`;

export const CardText = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ color }) => color || colors.SMOKE};
`;
