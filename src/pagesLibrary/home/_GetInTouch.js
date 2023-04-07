import styled from "styled-components";
import {
  Header2,
  Typography,
  VContainer,
  MinimalButton,
  HyperlinkButton,
} from "@/bespokeSystem/components";
import { colors } from "@/designSystem/constants/colors";

export const GetInTouch = () => {
  return (
    <>
      <VContainer gridGap="0.5rem">
        <Header2>Get In Touch</Header2>
        <HyperlinkButton
          href="https://www.linkedin.com/in/steven-van-blerk"
          label="www.linkedin.com/in/steven-van-blerk"
        />
        <HyperlinkButton
          href="mailto:stevenvanblerkrsa@gmail.com"
          label="stevenvanblerkrsa@gmail.com"
        />
        <Typography>Mobile: +27 76 885 4323</Typography>

        <Typography>Cape Town, South Africa</Typography>
        <Anchor href="/StevenVanBlerkCV.pdf" download="Steven van Blerk CV">
          <CVButton>
            <Typography color={colors.BLACK} fontFamily="Rajdhani-Regular">
              download cv
            </Typography>
          </CVButton>
        </Anchor>
      </VContainer>
    </>
  );
};

const CVButton = styled((props) => <MinimalButton {...props} />)`
  display: flex;
  align-items: center;
  margin: auto;
  background: ${colors.SMOKE};
  border: 4px solid ${colors.LIGHT_CHARCOAL};
  color: ${colors.BLACK};
  height: 35px;
  width: fit-content;
  padding: 0 15px;
  border-radius: 40px;
  cursor: pointer;

  transition: all 0.1s;
  :hover {
    transform: scale(1.03);
  }
  :active {
    transform: scale(0.98);
  }
`;

const Anchor = styled.a`
  width: fit-content;
  margin: auto;
`;
