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
      <PageTitle>Steven van Blerk</PageTitle>
      {/* SUMMARY */}
      <Center>
        <Typography maxWidth="700px">
          I am a Frontend Developer from Cape Town using JavaScript and React. I
          have a passion for developing high calibre, interactive, robust
          websites.
        </Typography>
      </Center>
      <Center>
        {/* <DimensionContainer maxWidth="fit-content" margin="auto">
          <Card>
            <div>Get In Contact</div>
            <div>https://www.linkedin.com/in/steven-van-blerk/</div>
            <div>stevenvanblerkrsa@gmail.com</div>
            <div>Introduction</div>
            <div>Work Experience</div>
            <div>Education</div>
            <div>Areas of Expertise</div>
            <div>Other Qualities</div>
          </Card>
        </DimensionContainer> */}
      </Center>
      {/* TECH STACK */}
      <Subtitle color={colors.SMOKE}>Tech Stack</Subtitle>
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
      {/* GET IN TOUCH */}

      <Center margin="1.5rem auto">
        <VContainer gridGap="0.5rem">
          <Subtitle>Get In Touch</Subtitle>
          <a href="www.linkedin.com/in/steven-van-blerk">
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
            <Typography color={colors.BLACK}>download cv</Typography>
          </TestButton>
        </VContainer>
      </Center>
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
