import { Icon } from "./styled-components";
import { PictorialGrid } from "./styled-components";

/*Alternative idea: Earth--O--Rocket--O--Moon
  Distance from earth indicates skill
*/
export const PictorialBar = ({ rating }) => {
  return (
    <PictorialGrid>
      <Icon
        height={20}
        filled={rating >= 1}
        src="/icons/pictorial/pacman/pacman.svg"
      />
      <Icon
        height={20}
        filled={rating >= 2}
        src="/icons/pictorial/pacman/ghost.svg"
      />
      <Icon
        height={20}
        filled={rating >= 3}
        src="/icons/pictorial/pacman/ghost.svg"
      />
      <Icon
        height={20}
        filled={rating >= 4}
        src="/icons/pictorial/pacman/ghost.svg"
      />
      <Icon
        height={20}
        filled={rating === 5}
        // src="/icons/pictorial/pacman/cherry.svg"
        src="/icons/pictorial/pacman/ghost.svg"
      />
    </PictorialGrid>
  );
};
