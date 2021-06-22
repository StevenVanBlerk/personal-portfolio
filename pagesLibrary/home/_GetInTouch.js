import styled from "styled-components";
import { Header2, Typography, VContainer, MinimalButton } from "/components";
import { colors } from "/constants/colors";

export const GetInTouch = () => {
  return (
    <>
      <VContainer gridGap="0.5rem">
        <Header2>Get In Touch</Header2>
        <a href="https://www.linkedin.com/in/steven-van-blerk" target="_blank">
          <Typography textDecoration="underline">
            www.linkedin.com/in/steven-van-blerk
          </Typography>
        </a>
        <a href="mailto:stevenvanblerkrsa@gmail.com">
          <Typography textDecoration="underline">
            stevenvanblerkrsa@gmail.com
          </Typography>
        </a>
        <Typography>Mobile: +27 76 885 4323</Typography>

        <Typography>Cape Town, South Africa</Typography>
        <CVButton>
          <a href="/StevenVanBlerkCV.pdf" download="Steven van Blerk CV">
            <Typography color={colors.BLACK} fontFamily="Rajdhani-Regular">
              download cv
            </Typography>
          </a>
        </CVButton>
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
`;
