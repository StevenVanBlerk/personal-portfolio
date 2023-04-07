import styled from "styled-components";

/*Alternative idea: Earth--O--Rocket--O--Moon
  Distance from earth indicates skill
*/

//height=20
const pacmanSet = [
  "/icons/pictorial/pacman/pacman.svg",
  "/icons/pictorial/pacman/ghost.svg",
  "/icons/pictorial/pacman/ghost.svg",
  "/icons/pictorial/pacman/ghost.svg",
  "/icons/pictorial/pacman/ghost.svg", // src="/icons/pictorial/pacman/cherry.svg"
];

// height = ~ 52
const careerSet = [
  "/icons/pictorial/career/man.svg",
  "/icons/pictorial/career/graduate.svg",
  "/icons/pictorial/career/engineer.svg",
  "/icons/pictorial/career/dev.svg",
  "/icons/pictorial/career/artist.svg",
];
export const PictorialBar = ({
  rating,
  images = pacmanSet,
  imageHeight = 20,
}) => {
  return (
    <PictorialGrid>
      <Icon height={imageHeight} filled={rating >= 1} src={images[0]} />
      <Icon height={imageHeight} filled={rating >= 2} src={images[1]} />
      <Icon height={imageHeight} filled={rating >= 3} src={images[2]} />
      <Icon height={imageHeight} filled={rating >= 4} src={images[3]} />
      <Icon height={imageHeight} filled={rating === 5} src={images[4]} />
    </PictorialGrid>
  );
};

const PictorialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 13px;
`;

const Icon = styled.img`
  opacity: ${({ filled }) => (filled ? 1 : 0.2)};
`;
