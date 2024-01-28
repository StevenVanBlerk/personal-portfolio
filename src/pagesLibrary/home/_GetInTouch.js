import {
  Header2,
  Typography,
  VContainer,
  HyperlinkButton,
} from "@/bespokeSystem/components";
import { CVButton } from "@/bespokeSystem/components/inputs/CVButton";

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
        <CVButton />
      </VContainer>
    </>
  );
};
