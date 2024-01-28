import { Container, Typography, VContainer } from "@/bespokeSystem/components";
import styled from "styled-components";
import { CVButton } from "../inputs/CVButton";

export const UnderConstruction = () => {
  return (
    <StyledContainer>
      <VContainer gridGap="0.5rem">
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
        <CVButton />
      </VContainer>
    </StyledContainer>
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
