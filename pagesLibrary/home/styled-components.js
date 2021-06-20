import styled from "styled-components";
import { Card, Container } from "/components";
import { colors } from "/constants/colors";

export const TechCard = styled(Container)`
  height: 250px;
  background: ${colors.DARK_CHARCOAL};
  border: 5px solid ${colors.LIGHT_CHARCOAL};
  justify-content: center;
  border-radius: 3px;
  text-align: center;
`;

export const TestCard = styled(Card)`
  height: 250px;
  background: ${colors.DARK_CHARCOAL};
  border: 5px solid ${colors.LIGHT_CHARCOAL};
  justify-content: center;
  border-radius: 3px;
  text-align: center;
`;

export const TestButton = styled(TechCard)`
  display: flex;
  align-items: center;
  margin: auto;
  background: ${colors.SMOKE};
  /* border-color: ${colors.LIGHT_CHARCOAL}; */
  border: 4px solid ${colors.LIGHT_CHARCOAL};
  color: ${colors.BLACK};
  height: 35px;
  width: fit-content;
  padding: 0 15px;
  border-radius: 40px;
  cursor: pointer;
`;
