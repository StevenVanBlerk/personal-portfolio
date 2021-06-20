import { useState } from "react";
import {
  PageTitle,
  Subtitle,
  Card,
  HoveringContainer,
  Typography,
  DimensionContainer,
  Center,
  UnderConstruction,
  PictorialBar,
  ScrollToTopButton,
  VContainer,
  FlowingGrid,
  CardTitle,
} from "/components";
import { TechCard, TestButton } from "./styled-components";
import { colors } from "/constants/colors";

const techStack = [
  { img: "/icons/tech/react.svg", title: "React", years: 2, skill: 5 },
  {
    img: "/icons/tech/javascript.svg",
    title: "JavaScript",
    years: 3,
    skill: 5,
  },
  { img: "/icons/tech/node.svg", title: "Node", years: 2, skill: 3 },
  { img: "/icons/tech/html.svg", title: "HTML", years: 3, skill: 5 },
  { img: "/icons/tech/css.svg", title: "CSS", years: 3, skill: 5 },
  { img: "/icons/tech/docker.svg", title: "Docker", years: 2, skill: 4 },
  { img: "/icons/tech/git.svg", title: "Git", years: 3, skill: 5 },
  { img: "/icons/tech/mssql.svg", title: "MS SQL", years: 3, skill: 5 },
  {
    img: "/icons/tech/postgresql.svg",
    title: "POSTGRESQL",
    years: 3,
    skill: 5,
  },
  { img: "/icons/tech/csharp.svg", title: "C#", years: 2, skill: 4 },
  { img: "/icons/tech/unity.svg", title: "Unity", years: 1, skill: 2 },
  { img: "/icons/tech/jira.svg", title: "Jira", years: 3, skill: 5 },
];

const Home = () => {
  return (
    <>
      <ScrollToTopButton />
      <UnderConstruction />
      <VContainer gridGap="1rem" padding="0 1.5rem">
        <PageTitle>Steven van Blerk</PageTitle>
        {/* SUMMARY */}
        <Center>
          <Typography maxWidth="700px">
            I am a Frontend Developer from Cape Town using JavaScript and React.
            I have a passion for developing high calibre, interactive, robust
            websites.
          </Typography>
        </Center>

        {/* TECH STACK */}
        <DimensionContainer maxWidth="fit-content" margin="auto">
          <FlowingGrid
            justifyContent="center"
            columnMaxWidth="300px"
            gridGap="1rem"
            maxColumns="4"
          >
            {techStack.map((entry, i) => (
              <TechCard key={i} padding="1rem">
                <VContainer justifyContent="space-evenly" height="100%">
                  <CardTitle color={colors.SMOKE}>{entry.title}</CardTitle>
                  <Center>
                    <HoveringContainer
                      displacement={4}
                      delay={`0.${(i % 4) * 2}`}
                    >
                      <img src={entry.img} height="60" />
                    </HoveringContainer>
                  </Center>
                  <Typography color={colors.SMOKE}>
                    {entry.years === 1 ? "1 Year" : `${entry.years} Years`}
                  </Typography>
                  <Center>
                    <PictorialBar rating={entry.skill} />
                  </Center>
                </VContainer>
              </TechCard>
            ))}
          </FlowingGrid>
        </DimensionContainer>
        {/* WORK EXPERIENCE */}
        <Subtitle color={colors.SMOKE}>WORK EXPERIENCE</Subtitle>
        {/* mainboard */}
        <VContainer alignItems="center">
          <CardTitle>Mainboard</CardTitle>
          <Typography fontStyle="italic">Mar 2021 - Present</Typography>
          <Typography maxWidth="700px">
            My current work utilises Frontend React JS to build websites for
            businesses of clients. Standard features of these sites include well
            polished landing pages, user input forms, news feeds, social media
            integration, and catalogues (CSS Grid and Flexbox).
          </Typography>
        </VContainer>
        {/* saeon */}
        <VContainer alignItems="center">
          <CardTitle>SAEON</CardTitle>
          <Typography fontStyle="italic">Oct 2019 - Feb 2021</Typography>
          <Typography maxWidth="700px">
            I was employed as a Frontend React JS Developer though it is more
            accurate to say my work was Full Stack. Most of my work allowed
            researchers to manage and view data. This included highly detailed
            and interactive visual charts, input forms, and an interface to
            allow users to query databases with SQL.
          </Typography>
        </VContainer>
        {/* brainwave */}
        <VContainer alignItems="center">
          <CardTitle>Brainwave Projects</CardTitle>
          <Typography fontStyle="italic">Jun 2018 - Sept 2019</Typography>
          <Typography maxWidth="700px">
            The majority of my work was Back-end in C#. and included automating
            data report building, usually from MS SQL to a webpage or an Excel
            export. Other work included an e-Catalogue site and a call centre
            dialler.
          </Typography>
        </VContainer>

        {/* EDUCATION */}
        <Center margin="1.5rem auto">
          <Subtitle margin="0 0 1rem 0" color={colors.SMOKE}>
            EDUCATION
          </Subtitle>
          {/* mainboard */}
          <VContainer alignItems="center">
            <CardTitle>University of the Western Cape</CardTitle>
            <Typography fontStyle="italic">Jan 2015 - Dec 2018</Typography>
            <Typography maxWidth="700px">
              Bachelor of Science, Physics
            </Typography>
          </VContainer>
        </Center>
        {/* GET IN TOUCH */}

        <Center margin="1.5rem auto">
          <VContainer gridGap="0.5rem">
            <Subtitle>Get In Touch</Subtitle>
            <a
              href="https://www.linkedin.com/in/steven-van-blerk"
              target="_blank"
            >
              <Typography textDecoration="underline">
                www.linkedin.com/in/steven-van-blerk
              </Typography>
            </a>
            <a href="mailto:stevenvanblerkrsa@gmail.com">
              <Typography textDecoration="underline">
                stevenvanblerkrsa@gmail.com
              </Typography>
            </a>
            <Typography>Mobile: +27 76 885 4323</Typography>

            <Typography>Cape Town, South Africa</Typography>
            <TestButton>
              <a href="/StevenVanBlerkCV.pdf" download="Steven van Blerk CV">
                <Typography color={colors.BLACK}>download cv</Typography>
              </a>
            </TestButton>
          </VContainer>
        </Center>
      </VContainer>
    </>
  );
};

export default Home;

/* sheldon's idea: star wars scrolling effect for text (could be timeline)
      page side navigation thing could be a star constellation instead of a
      branch
      <br />
      <br />
      Page: Sick ass music (Glass Animals, Oliver Tree, OK:GO, good music
      videos), youtube API integration demo */
