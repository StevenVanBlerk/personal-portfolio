import { useState } from "react";
import {
  Header2,
  Typography,
  VContainer,
  Header3,
  Container,
} from "@/bespokeSystem/components";
import { colors } from "@/designSystem/constants/colors";

export const Education = () => {
  return (
    <>
      <VContainer maxWidth="700px" margin="auto">
        <Header2 margin="0 0 1rem 0" color={colors.SMOKE}>
          EDUCATION
        </Header2>
        <Container alignItems="center">
          <Header3>University of the Western Cape</Header3>
          <Typography fontStyle="italic">Jan 2015 - Dec 2018</Typography>
          <Typography>Bachelor of Science, Physics</Typography>
        </Container>
      </VContainer>
    </>
  );
};
