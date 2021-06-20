import "/styles/globals.css";

import styled from "styled-components";
import { colors } from "/constants/colors";

const routes = [
  { label: "Home", path: "/", iconPath: "/icons/home.svg" },
  {
    label: "Components",
    iconPath: "/icons/square.svg",
    path: "/components",

    children: [
      { label: "Animations", path: "/components/animations" },
      { label: "Loading Effects", path: "/components/loading-effects" },
      { label: "Games", path: "/components/games" },
      { label: "Inputs", path: "/components/inputs" },
      { label: "Layouts", path: "/components/layouts" },
      { label: "Inputs", path: "/components/inputs" },
      { label: "Navigation", path: "/components/navigation" },
    ],
  },
  {
    label: "Get In Touch",
    path: "/get-in-touch",
    iconPath: "/icons/square.svg",
  },
  {
    label: "Hire My Friends",
    path: "/hire-my-friends",
    iconPath: "/icons/square.svg",
  },
];

const Main = styled.main`
  text-align: center;
  background-color: ${colors.CHARCOAL};
  /* background: transparent; */
  /* height: auto; */
  color: white;
  padding: 0px 0 200px 0;
  /* z-index: 1; */
`;

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
