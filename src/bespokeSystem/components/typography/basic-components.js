import styled from "styled-components";
import { colors } from "@/designSystem/constants/colors";
import { StyledComponent } from "@/bespokeSystem/components";
export const Typography = styled((props) => (
  <StyledComponent as="p" {...props} />
))`
  margin: ${({ margin }) => margin || 0};
  font-family: ${({ fontFamily }) =>
    fontFamily || "Rajdhani-Regular, system-ui, sans-serif"};
  color: ${({ color }) => color || colors.SMOKE};
  font-size: ${({ fontSize }) => fontSize || "19px"};
`;

export const Header1 = styled((props) => <Typography as="h1" {...props} />)`
  text-align: center;
  font-family: ${({ fontFamily }) => fontFamily || "Rajdhani-Bold"};
  font-size: 36px;
  margin: 0;
`;
export const Header2 = styled((props) => <Header1 as="h2" {...props} />)`
  font-size: 33px;
  margin: 0;
`;

export const Header3 = styled((props) => <Header1 as="h3" {...props} />)`
  font-size: 30px;
  margin: 0;
`;
