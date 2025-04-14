import {
  Header2,
  Typography,
  Container,
  VContainer,
  Header3,
} from "@/bespokeSystem/components";
import { colors } from "@/designSystem/constants/colors";

export const WorkExperience = () => {
  return (
    <>
      <VContainer gridGap="1rem" maxWidth="700px" margin="auto">
        <Header2 color={colors.SMOKE}>WORK EXPERIENCE</Header2>
        {/* Precium */}
        <Container alignItems="center">
          <Header3>Precium</Header3>
          <Typography fontStyle="italic">Nov 2023 - Present</Typography>
          <Typography>
            Precium is an Africa focused payment orchestration platform where I
            form part of a small, tight knit engineering team. Since the team is
            small, my responsibilities cover all aspects of frontend
            development. My day to day tech includes NextJS, TypeScript, Redux,
            Styled Components, React hook form, Storybook, Figma, and Cypress.
          </Typography>
        </Container>
        {/* OfferZen */}
        <Container alignItems="center">
          <Header3>OfferZen</Header3>
          <Typography fontStyle="italic">Sep 2021 - Sep 2023</Typography>
          <Typography>
            My work involved maintaining a successful recruitment marketplace
            built upon a collection of React JS SPAs. I worked closely with the
            design team to continuously improve the frontend of the product. My
            day to day tech included JavaScript, React, PropTypes, Redux,
            Emotion, React hook form, React query, Storybook, Jest, React
            testing library, Figma, and GraphQL.
          </Typography>
        </Container>
        {/* mainboard */}
        <Container alignItems="center">
          <Header3>Mainboard</Header3>
          <Typography fontStyle="italic">Mar 2021 - Aug 2021</Typography>
          <Typography>
            My work utilised Frontend React JS to build websites for clients.
            Standard features of these sites included highly polished landing
            pages, user input forms, news feeds, social media integration, and
            catalogues.
          </Typography>
        </Container>
        {/* saeon */}
        <Container alignItems="center">
          <Header3>SAEON</Header3>
          <Typography fontStyle="italic">Oct 2019 - Feb 2021</Typography>
          <Typography>
            I was employed as a Frontend React JS Developer though it is more
            accurate to say my work was Full Stack. Most of my work allowed
            researchers to manage and view data. This included highly detailed
            and interactive visual charts, input forms, and an interface to
            allow users to query databases via SQL.
          </Typography>
        </Container>
        {/* brainwave */}
        <Container alignItems="center">
          <Header3>Brainwave Projects</Header3>
          <Typography fontStyle="italic">Jun 2018 - Sept 2019</Typography>
          <Typography>
            The majority of my work was Back-end in C#. and included automating
            data report building, usually from MS SQL to a webpage or an Excel
            export. Other work included an e-Catalogue site and a call centre
            dialler.
          </Typography>
        </Container>
      </VContainer>
    </>
  );
};
