import React from "react";
import styles from "./streakCard.module.scss";
import { Flex, BorderBox, Heading } from "@primer/components";
import { borderColor } from "../../styles/colors";

export const StreakCard = ({ children, heading, dataHeading }) => {
  return (
    <BorderBox borderColor={borderColor} className={styles.container}>
      <Flex justifyContent="center">
        <Heading fontSize={2} mb={2} color="#FECEAB">
          {heading}
        </Heading>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Heading color="#a4a4a4" fontSize={5}>
          {dataHeading}
        </Heading>
      </Flex>
    </BorderBox>
  );
};
