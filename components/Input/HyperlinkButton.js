import styled from "styled-components";
import { Typography, MinimalButton, StyledComponent } from "/components";
import { colors } from "/constants/colors";

export const HyperlinkButton = ({
  href,
  target = "_blank",
  label,
  ...otherProps
}) => {
  return (
    <>
      <Anchor
        href={href}
         target={target}
        {...otherProps}
      >
        <Button>
          <TypographyLink>{label}</TypographyLink>
        </Button>
      </Anchor>
    </>
  );
};

const TypographyLink = styled((props) => <Typography {...props} />)`
  background-image: linear-gradient(transparent 90%, white);
  background-size: 30%;
  background-repeat: no-repeat;
  display: inline;
  transition: 0.5s ease;
`;
const Button = styled((props) => <MinimalButton {...props} />)`
  :hover {
    ${TypographyLink} {
      background-size: 100%;
    }
  }
`;

const Anchor = styled((props) => <StyledComponent as="a" {...props} />)`
  width: fit-content;
  margin: auto;
`;
