import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../constants/colors";

const StarsContainer = styled.div`
  background: ${colors.DARK_CHARCOAL};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const StarryBackground = ({
  starCount = 1000,
  //white x3, blue, red, orange
  starColors = [
    "#f0f0f0",
    "#f0f0f0",
    "#f0f0f0",
    "#5681B9",
    "#C34731",
    "#EAA27F",
  ],
  children,
}) => {
  const stars = [...Array(starCount).keys()];

  //TO-DO: maybe I can use ONLY vh units or ONLY vw units for both height AND width (to fix angle issue)
  const direction = Math.random() < 0.5 ? "ltr" : "rtl";
  const xa = direction === "ltr" ? 0 : 100; //Math.random() > 0.5 ? "100vw" : "0vw";
  const xb = direction === "ltr" ? 100 : 0; //Math.random() > 0.5 ? "100vw" : "0vw";
  // const xb = "100vw"; //Math.random() > 0.5 ? "100vw" : "0vw";
  const ya = Math.random() * 100;
  const yb = Math.random() * 100;
  // console.log("ya,yb", ya, yb);
  const theta = Math.atan((yb - ya) / (xb - xa)); //y and b use different units. This is inaccurate
  // console.log("theta", theta);
  return (
    <>
      <StarsContainer>
        <motion.svg style={{ width: "100%", height: "100%" }}>
          {/* <motion.line
            x1="0vw"
            y1="0vh"
            x2="1vw"
            y2="0vh"
            stroke="#f0f0f0"
            strokeWidth="1"
            fill="#f0f0f0"
            initial={{ x: `${xa}vw`, y: `${ya}vh`, rotate: `${theta}rad` }}
            animate={{ x: `${xb}vw`, y: `${yb}vh` }}
            transition={{
              repeat: Infinity,
              duration: "5",
              delay: "0",
              ease: "linear",
            }}
            onAnimationStart={(e) => {
              console.log("onAnimationStart", e);
            }}
          /> */}
          {stars.map((i) => {
            const left = Math.floor(Math.random() * 10000) / 100; //0 -> 100 with 2 decimal places
            const top = Math.floor(Math.random() * 10000) / 100; //0 -> 100 with 2 decimal places
            // const delay = Math.floor(Math.random() * 1000) / 1000; //0 -> 1 with 3 decimal places
            const delay = i / starCount; // 0.000 -> 0.999 in increments of 0.001 (if default star count)
            const color =
              starColors[Math.floor(Math.random() * starColors.length)];
            return (
              <motion.circle
                key={i}
                cy={`${top}vh`}
                cx={`${left}vw`}
                r="0.8"
                stroke={color}
                strokeWidth="0"
                fill={color}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.2,
                  delay: delay,
                }}
              />
            );
          })}
        </motion.svg>
      </StarsContainer>
      <div style={{ position: "relative" }}>{children}</div>
    </>
  );
};
