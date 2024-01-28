import styled from "styled-components";
import { Typography, MinimalButton } from "@/bespokeSystem/components";
import { colors } from "@/designSystem/constants/colors";

export const CVButton = () => {
  return (
    <Anchor href="/StevenVanBlerkCV.pdf" download="Steven van Blerk CV">
      <GreyButton>
        <Typography color={colors.BLACK} fontFamily="Rajdhani-Regular">
          download cv
        </Typography>
      </GreyButton>
    </Anchor>
  );
};

const GreyButton = styled((props) => <MinimalButton {...props} />)`
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
