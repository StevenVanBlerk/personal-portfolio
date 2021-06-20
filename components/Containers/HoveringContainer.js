import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  height: fit-content;
  width: fit-content;
`;

export const HoveringContainer = ({
  delay = 0,
  duration = 2,
  displacement = -10,
  children,
  ...otherProps
}) => {
  return (
    <Container
      initial={{ y: -displacement }}
      animate={{ y: [-displacement, displacement, -displacement] }}
      transition={{ repeat: Infinity, duration: duration, delay: delay }}
      {...otherProps}
    >
      {children}
    </Container>
  );
};
