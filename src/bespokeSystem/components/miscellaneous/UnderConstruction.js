import {
  Container,
  Typography,
  MinimalButton,
} from "@/bespokeSystem/components";
import styled from "styled-components";
import { colors } from "@/designSystem/constants/colors";

export const UnderConstruction = () => {
  return (
    <>
      <StyledContainer>
        <Typography
          color="#FAC533"
          fontFamily="Rajdhani-Regular"
          fontSize="20px"
        >
          UNDER CONSTRUCTION
        </Typography>
        <Typography
          color="#FAC533"
          fontFamily="Rajdhani-Regular"
          fontSize="20px"
        >
          A complete overhaul is underway, in the meantime please see my up to
          date CV.
          <br />
          Come back soon!
        </Typography>
        <Anchor href="/StevenVanBlerkCV.pdf" download="Steven van Blerk CV">
          <CVButton>
            <Typography color={colors.BLACK} fontFamily="Rajdhani-Regular">
              download cv
            </Typography>
          </CVButton>
        </Anchor>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled((props) => <Container {...props} />)`
  width: fit-content;
  align-self: center;
  padding: 10px;
  position: relative;
  background-color: rgba(250, 197, 51, 0.05);
  ::before,
  ::after {
    content: "";
    position: absolute;
    border: 2px solid #fac533;
    width: 30%;
  }

  ::before {
    top: 0;
    left: 0;
    height: calc(50% + 5px);
    border-right: none;
    border-bottom: none;
  }

  ::after {
    bottom: 0;
    right: 0;
    height: calc(50% + 5px);
    border-left: none;
    border-top: none;
  }
`;

const CVButton = styled((props) => <MinimalButton {...props} />)`
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 10px;
  background: ${colors.SMOKE};
  border: 4px solid ${colors.LIGHT_CHARCOAL};
  color: ${colors.BLACK};
  height: 35px;
  width: fit-content;
  padding: 0 15px;
  border-radius: 40px;
  cursor: pointer;

  transition: all 0.1s;
  :hover {
    transform: scale(1.03);
  }
  :active {
    transform: scale(0.98);
  }
`;

const Anchor = styled.a`
  width: fit-content;
  margin: auto;
`;
