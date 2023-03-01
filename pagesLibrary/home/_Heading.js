import { useState } from "react";
import {
  Header1,
  Typography,
  UnderConstruction,
  VContainer,
} from "/components";

export const Heading = () => {
  return (
    <>
      <VContainer gridGap="1rem" maxWidth="700px" margin="auto">
        {/* <UnderConstruction /> */}
        <Header1>STEVEN VAN BLERK</Header1>
        <Typography>
          I am a Frontend Developer from Cape Town, South Africa using
          JavaScript and React. I have a passion for developing high calibre,
          interactive, and robust websites.
        </Typography>
      </VContainer>
    </>
  );
};
