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
          Hello, and welcome to my site! I am a Frontend Developer from Cape Town, South Africa using
          JavaScript and React. I have a passion for UI and UX, as well as creative coding.
        </Typography>
      </VContainer>
    </>
  );
};
