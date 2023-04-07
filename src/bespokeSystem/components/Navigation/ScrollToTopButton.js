import styled from "styled-components";
import { MinimalButton } from "@/bespokeSystem/components";
import {
  motion,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

//https://www.framer.com/api/motion/examples/
//https://codesandbox.io/s/framer-motion-viewport-scroll-and-svg-path-animation-mwi35?fontsize=14&module=/src/Example.tsx&file=/src/styles.css

/*another visual idea:
  rocket ship idles at bottom right. As scroll progress increases, rocket gets closer to "Lift Off" with shaking and smoke animations. 
  Onclick => rocket launches and user is scrolled to the top (maybe a hover while scrolling then a landing)
*/
const buttonSize = "50px";
const buttonSizeNum = 50;

export const ScrollToTopButton = ({
  top,
  left,
  right = "40px",
  bottom = "40px",
  icon = "/icons/up-arrow7.svg",
}) => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]); //converting scrollYProgress to a value from 0 to 1
  const buttonOpacity = useTransform(yRange, (value) => (value === 0 ? 0 : 1)); //converting yRange to exclusively 0 or 1
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 40 });

  console.log("pathLength.get", pathLength.get());
  return (
    <motion.div
      style={{
        opacity: buttonOpacity,
        transition: "opacity 0.2s",
      }}
    >
      <StickyButton
        visible={true}
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        height={buttonSize}
        width={buttonSize}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Container position="relative" width={buttonSize} height={buttonSize}>
          <Icon height={buttonSizeNum / 2} src={icon} />
          <svg viewBox={`0 0 ${buttonSizeNum} ${buttonSizeNum}`}>
            <motion.path
              fill="none"
              strokeWidth="3"
              stroke="white"
              strokeDasharray="0 1"
              d={`M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0`}
              style={{
                pathLength: pathLength,
                rotate: 90,
                translateX: 5,
                translateY: 5,
                scaleX: -1, // Reverse direction of line animation
              }}
            ></motion.path>
          </svg>
        </Container>
      </StickyButton>
    </motion.div>
  );
};

const StickyButton = styled((props) => <MinimalButton {...props} />)`
  position: fixed;
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: transform 0.2s, visibility 0.2s, opacity 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
const Container = styled.div``;
const Icon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: ${buttonSize} / 2;
  max-width: ${buttonSize} / 2;
`;
