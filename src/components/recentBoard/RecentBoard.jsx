import React from "react";
import { BorderBox, Flex, Heading } from "@primer/components";
import styles from "./recentBoard.module.scss";
import { borderColor } from "../../styles/colors";
import { RecentRow } from "./components/recentRow/RecentRow";

export const RecentBoard = ({ data, heading = "RECENT ACTIVITIES" }) => {
  return (
    <BorderBox className={styles.container} borderColor={borderColor}>
      <Flex width="100%" justifyContent="center">
        <Heading color="#FECEAB" fontSize={3} mb={2} marginBottom="30px">
          {heading}
        </Heading>
      </Flex>
      <Flex flexDirection="column" padding="0 50px">
        {data.map((row, idx) => {
          return <RecentRow data={row} sequence={idx} />;
        })}
      </Flex>
    </BorderBox>
  );
};
