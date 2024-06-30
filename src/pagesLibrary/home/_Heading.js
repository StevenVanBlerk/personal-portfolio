import { useState } from "react";
import {
  Header1,
  Typography,
  UnderConstruction,
  VContainer,
} from "@/bespokeSystem/components";

export const Heading = () => {
  return (
    <>
      <VContainer gridGap="1rem" maxWidth="700px" margin="auto">
        {/* <UnderConstruction /> */}
        <Header1>STEVEN VAN BLERK</Header1>
        <Typography>
          Hello and welcome! I am a Frontend Engineer from Cape Town, South
          Africa. I have a passion for UI & UX, as well as creative coding. I
          primarily work with TypeScript and React.
        </Typography>
      </VContainer>
    </>
  );
};
