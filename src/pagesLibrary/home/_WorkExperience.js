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
        {/* OfferZen */}
        <Container alignItems="center">
          <Header3>OfferZen</Header3>
          <Typography fontStyle="italic">Sep 2021 - Present</Typography>
          <Typography>
            My work involves maintaining a recruitment marketplace. The product
            includes a backend app built upon Ruby and GraphQL, and a collection
            of React JS SPAs. I work closely with the design team to
            continuously improve the frontend of the product. My current
            aspiration is to help usher in a design system.
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
            catalogues. I made a lot of use out of CSS Grid and Flexbox.
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
            allow users to query databases with SQL.
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
