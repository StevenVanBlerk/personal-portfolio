import styled from "styled-components";
import { Card } from "../../components";
import { colors } from "../../constants/colors";

export const TechCard = styled(Card)`
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
  background: ${colors.SMOKE};
  border-color: ${colors.LIGHT_CHARCOAL};
  color: ${colors.BLACK};
  height: 70px;
  width: 250px;
  border-radius: 50px;
`;
