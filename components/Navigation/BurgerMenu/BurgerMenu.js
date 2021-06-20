import { useState } from "react";
import {
  Menu,
  MainHeader,
  MainList,
  MenuItem,
  SubList,
  Footer,
  Anchor,
  Group,
  GroupItem,
} from "./styled-components";

/**General Process:
 * get collection of anchors (<a/>) and headers. --> var els
 * get count of els --> var count
 * get count of groups (groupLength) --> groupCount
 * let groupNumber = 0; (index indicating which group el is in)
 * let i = 1;
 * pass count to <Menu/>
 * assign groupNumber prop (data-group) to each prop of each group
 *
 *
 * *Onclick handling:
 * foreach el of els
 *    get getBoundClientRect().top
 *    get offset = (data-group * -15) -20 // not sure what 15 and 20 equate to. maybe header/line heights
 *    set el.top = clientRect.top + offset
 *    set el.delay-in = el.index * 0.1s
 *    set e.delay-out = (count - el.index) * 0.1s
 *
 * toggle whether or not <Menu/> has class .closed
 *
 */
export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const HandleToggle = () => {
    //https://codepen.io/jonwilcox/pen/WygLby
    //set top for each list element to getBoundingClient().top
  };
  return (
    <>
      <p style={{ background: "pink", color: "black" }}>BURGER MENU</p>
      <Menu closed={!menuOpen} top={"0px"}>
        <MainHeader>
          Menu <span>x</span>
        </MainHeader>
        <MainList>
          <Group index={1} closed={!menuOpen} >
            <GroupItem>
              <MenuItem>
                <Anchor href="#Widgets">Widgets</Anchor>
                <SubList>
                  <MenuItem>
                    <Anchor href="#BigWidgets" isSubAnchor>
                      Big Widgets
                    </Anchor>
                  </MenuItem>
                  <MenuItem>
                    <Anchor href="#BiggerWidgets" isSubAnchor>
                      Bigger Widgets
                    </Anchor>
                  </MenuItem>
                </SubList>
              </MenuItem>
            </GroupItem>
          </Group>
          <Group index={2} closed={!menuOpen}>
            <GroupItem>
              <MenuItem>
                <Anchor href="#group2item">Group 2 item</Anchor>
              </MenuItem>
            </GroupItem>
          </Group>
          <Group index={3} closed={!menuOpen}>
            <GroupItem>
              <MenuItem>
                <Anchor href="#group2item">Group 3 item</Anchor>
              </MenuItem>
            </GroupItem>
          </Group>
        </MainList>
        <Footer>
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen((prevState) => !prevState)}
          >
            Toggle
          </button>
        </Footer>
      </Menu>
    </>
  );
};
