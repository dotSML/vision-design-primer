import React from "react";
import styles from "./footer.module.scss";
import {
  Flex,
  ButtonPrimary,
  Button,
  SubNav,
  Dropdown,
} from "@primer/components";

export const Footer = ({ handleThemeChange, theme }) => {
  return (
    <footer className={styles.container}>
      <SubNav aria-label="Main">
        <SubNav.Links>
          <SubNav.Link href="#home" selected>
            Home
          </SubNav.Link>
          <SubNav.Link href="#players" color="#fff">
            Players
          </SubNav.Link>
          <SubNav.Link href="#history" color="#fff">
            History
          </SubNav.Link>
          <SubNav.Link href="#blacklist" color="#fff">
            Blacklist
          </SubNav.Link>
        </SubNav.Links>
      </SubNav>
      <Flex>
        <Button
          sx={{
            backgroundColor: theme ? "#000" : "#fff",
            color: theme ? "#fff" : "#000",
            ":hover": {
              backgroundColor: theme ? "#000" : "#fff",
            },
          }}
          onClick={() => handleThemeChange()}
        >
          {theme ? "Dark" : "Light"} mode
        </Button>
      </Flex>
      <Flex>
        <ButtonPrimary marginRight={2}>START A NEW MATCH</ButtonPrimary>
        <Button>STATISTICS</Button>
      </Flex>
    </footer>
  );
};
