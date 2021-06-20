import React, { useState } from "react";
import {
  Menu,
  MainHeader,
  MainList,
  RetractingPanel,
  SubList,
  Footer,
  Anchor,
  Group,
  GroupItem,
  BurgerButton,
  BurgerIcon,
  CloseButton,
  HeaderText,
  Icon,
  IconPlaceholder,
} from "./styled-components";
import Image from "next/image";

//similar to original burger menu except:
//instead of scaling up/down, it slides in from offscreen one row at a time

export const BurgerMenu2 = ({ routes }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <BurgerButton onClick={HandleToggle}>
        <BurgerIcon src="/icons/burger2.svg" alt="burger-menu" width="25" />
      </BurgerButton>
      <Menu closed={!menuOpen} count={routes.length}>
        <MainHeader>
          <HeaderText>Menu</HeaderText>
          <CloseButton onClick={HandleToggle}>
            <Image
              src="/icons/cross.svg"
              alt="close-menu"
              width="20"
              height="20"
            />
          </CloseButton>
        </MainHeader>
        <MainList>
          {routes.map((route, i) => {
            const children = route.children || [];
            return (
              <React.Fragment key={i}>
                <RetractingPanel closed={!menuOpen} index={i + 1}>
                  <Anchor href={route.path}>
                    {route.iconPath ? (
                      <Icon src={route.iconPath} width="20" height="20" />
                    ) : (
                      <IconPlaceholder />
                    )}
                    {route.label}
                  </Anchor>
                  <SubList>
                    {children.map((child, j) => {
                      return (
                        <Anchor key={j} href={child.path} isSubAnchor>
                          {child.label}
                        </Anchor>
                      );
                    })}
                  </SubList>
                </RetractingPanel>
              </React.Fragment>
            );
          })}
        </MainList>
      </Menu>
    </>
  );
};
