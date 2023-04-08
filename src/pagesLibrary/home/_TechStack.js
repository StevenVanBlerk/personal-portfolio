import styled from 'styled-components'
import { HoveringContainer, Container } from '@/bespokeSystem/components'
import { Grid, Card, Text, colors, NextImage } from '@/designSystem'

export const TechStack = () => {
  return (
    <Grid size="huge" maxColumns="4">
      {techStack.map((entry, i) => (
        <Card
          key={entry.title}
          gapSize="huge"
          header={entry.title}
          footer={
            <Text>{entry.years === 1 ? '1 Year' : `${entry.years} Years`}</Text>
          }
        >
          <HoveringContainer displacement={4} delay={`0.${(i % 3) * 2}`}>
            <NextImage
              src={entry.img}
              alt={`${entry.title} logo`}
              fill
              height={60}
            />
          </HoveringContainer>
        </Card>
      ))}
    </Grid>
  )
}

export const TechCard = styled(Container)`
  height: 250px;
  background: ${colors.DARK_CHARCOAL};
  border: 5px solid ${colors.LIGHT_CHARCOAL};
  justify-content: center;
  border-radius: 3px;
  text-align: center;
`

const startDates = {
  BRAINWAVE: new Date('1 June 2018'),
  SAEON: new Date('1 October 2019'),
  MAINBOARD: new Date('1 March 2021'),
  OFFERZEN: new Date('1 September 2021'),
}

const calculateYearsExp = (startDate) => {
  const currentDate = new Date()
  return currentDate.getFullYear() - startDate.getFullYear() //bad calc
}
const techStack = [
  {
    img: '/icons/tech/javascript.svg',
    title: 'JavaScript',
    years: calculateYearsExp(startDates.BRAINWAVE),
  },
  {
    img: '/icons/tech/react.svg',
    title: 'React',
    years: calculateYearsExp(startDates.SAEON),
  },
  {
    img: '/icons/tech/html.svg',
    title: 'HTML',
    years: calculateYearsExp(startDates.BRAINWAVE),
  },
  {
    img: '/icons/tech/css.svg',
    title: 'CSS',
    years: calculateYearsExp(startDates.BRAINWAVE),
  },
  {
    img: '/icons/tech/storybook.svg',
    title: 'Storybook',
    years: calculateYearsExp(startDates.OFFERZEN),
  },
  {
    img: '/icons/tech/p5js.svg',
    title: 'P5.js',
    years: 1,
  },
  {
    img: '/icons/tech/git.svg',
    title: 'Git',
    years: calculateYearsExp(startDates.BRAINWAVE),
  },
  {
    img: '/icons/tech/node.svg',
    title: 'Node',
    years: calculateYearsExp(startDates.SAEON),
  },
  {
    img: '/icons/tech/docker.svg',
    title: 'Docker',
    years: calculateYearsExp(startDates.SAEON),
  },
  { img: '/icons/tech/csharp.svg', title: 'C#', years: 2 },
  { img: '/icons/tech/unity.svg', title: 'Unity', years: 2 },
  {
    img: '/icons/tech/jira.svg',
    title: 'Jira',
    years: calculateYearsExp(startDates.BRAINWAVE),
  },
]
