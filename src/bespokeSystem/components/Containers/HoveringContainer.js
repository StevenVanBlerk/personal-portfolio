import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "@/bespokeSystem/components";
const MyContainer = styled((props) => <Container as={motion.div} {...props} />)`
  height: fit-content;
  width: fit-content;
  margin: auto;
`;

export const HoveringContainer = ({
  delay = 0,
  duration = 2,
  displacement = -10,
  children,
  ...otherProps
}) => {
  return (
    <MyContainer
      initial={{ y: -displacement }}
      animate={{ y: [-displacement, displacement, -displacement] }}
      transition={{ repeat: Infinity, duration: duration, delay: delay }}
      {...otherProps}
    >
      {children}
    </MyContainer>
  );
};
