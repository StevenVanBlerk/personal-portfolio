import { useState } from "react";
import styled from "styled-components";
import {
  PageTitle,
  Subtitle,
  Card,
  FloatOnHoverCard,
  HoveringContainer,
  Typography,
  CardTitle,
  CardGrid,
  CardText,
  ContentsBar,
  DimensionContainer,
  BurgerMenu2,
  Center,
  PictorialBar,
  // ScrollToTopButton,
  StarryContainer,
} from "/components";
import { TechCard, TestCard, TestButton } from "./styled-components";
import { colors } from "../../constants/colors";
import { motion } from "framer-motion";

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
      {/* <ScrollToTopButton /> */}
      {/* <ContentsBar /> */}
      <PageTitle>Home Page</PageTitle>
      {/* SUMMARY */}
      <Subtitle>Summary</Subtitle>
      aaa sheldon's idea: star wars scrolling effect for text (could be timeline)
      page side navigation thing could be a star constellation instead of a
      branch
      <br />
      <br />
      Page: Sick ass music (Glass Animals, Oliver Tree, OK:GO, good music
      videos), youtube API integration demo
      <TestButton>
        <CardText color={colors.DARK_CHARCOAL}>LinkedIn</CardText>
      </TestButton>
      <Center>
        <DimensionContainer maxWidth="fit-content" margin="auto">
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
        </DimensionContainer>
      </Center>
      {/* TECH STACK */}
      <Subtitle color={colors.SMOKE}>Tech Stack</Subtitle>
      <DimensionContainer maxWidth="fit-content" margin="auto">
        <CardGrid gridGap="10px">
          {techStack.map((entry, i) => (
            <TechCard key={i}>
              <Subtitle color={colors.SMOKE}>{entry.title}</Subtitle>
              <Center>
                <HoveringContainer displacement={4} delay={`0.${(i % 3) * 2}`}>
                  <img src={entry.img} height="60" />
                </HoveringContainer>
              </Center>
              <CardText color={colors.SMOKE}>
                {entry.years === 1 ? "1 Year" : `${entry.years} Years`}
              </CardText>
              <Center>
                <PictorialBar rating={entry.skill} />
              </Center>
            </TechCard>
          ))}
        </CardGrid>
      </DimensionContainer>
      {/* GET IN TOUCH */}
      <Subtitle>Get In Touch</Subtitle>
      <button>download cv</button>
    </>
  );
};

export default Home;
