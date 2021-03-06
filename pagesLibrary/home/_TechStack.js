import styled from "styled-components";
import {
  HoveringContainer,
  Typography,
  DimensionContainer,
  PictorialBar,
  VContainer,
  Container,
  FlowingGrid,
  Header3,
} from "/components";
import { colors } from "/constants/colors";

export const TechStack = () => {
  return (
    <>
      <DimensionContainer maxWidth="fit-content" margin="auto">
        <FlowingGrid
          justifyContent="center"
          // columnMaxWidth="300px"
          // maxColumns="3"
          maxColumns="4"
          columnMaxWidth="240px"
          gridGap="1rem"
        >
          {techStack.map((entry, i) => (
            <TechCard key={i} padding="1rem">
              <VContainer height="100%">
                <Header3 color={colors.SMOKE}>{entry.title}</Header3>
                <HoveringContainer
                  displacement={4}
                  delay={`0.${(i % 3) * 2}`}
                  margin="auto"
                >
                  <img src={entry.img} height="60" />
                </HoveringContainer>
                <Typography color={colors.SMOKE} marginBottom="10px">
                  {entry.years === 1 ? "1 Year" : `${entry.years} Years`}
                </Typography>
                <Container width="fit-content" margin="auto">
                  <PictorialBar rating={entry.skill} />
                </Container>
              </VContainer>
            </TechCard>
          ))}
        </FlowingGrid>
      </DimensionContainer>
    </>
  );
};

export const TechCard = styled(Container)`
  height: 250px;
  background: ${colors.DARK_CHARCOAL};
  border: 5px solid ${colors.LIGHT_CHARCOAL};
  justify-content: center;
  border-radius: 3px;
  text-align: center;
`;

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
    title: "PostgreSQL",
    years: 3,
    skill: 5,
  },
  { img: "/icons/tech/csharp.svg", title: "C#", years: 2, skill: 4 },
  { img: "/icons/tech/unity.svg", title: "Unity", years: 1, skill: 2 },
  { img: "/icons/tech/jira.svg", title: "Jira", years: 3, skill: 5 },
];
