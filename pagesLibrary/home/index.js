import { useState } from "react";
import { ScrollToTopButton, VContainer, Container } from "/components";
import { colors } from "/constants/colors";
import { Heading } from "./_Heading";
import { GetInTouch } from "./_GetInTouch";
import { TechStack } from "./_TechStack";
import { WorkExperience } from "./_WorkExperience";
import { Education } from "./_Education";

const Home = () => {
  return (
    <>
      <ScrollToTopButton />

      <VContainer gridGap="3rem" padding="1.5rem">
        <Heading />
        <TechStack />
        <WorkExperience />
        <Education />
        <GetInTouch />
      </VContainer>
    </>
  );
};

export default Home;

/* Potential TO-DOs:

sheldon's idea: star wars scrolling effect for text (could be timeline)
      page side navigation thing could be a star constellation instead of a
      branch
      <br />
      <br />
      Page: Sick ass music (Glass Animals, Oliver Tree, OK:GO, good music
      videos), youtube API integration demo */

/*Rating system idea:
      a bar slider the user can drag to indicate their satisfaction with product/service. bar slider value (0 - 100) determines shape of svg above
      slider. 100= big smile, 0= sad face */

/** Embed Spotify to home page. Allow play of floating through space / interstellar soundtrack
 
 *  */
