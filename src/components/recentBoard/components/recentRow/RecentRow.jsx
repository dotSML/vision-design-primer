import React from "react";
import { Box, Flex } from "@primer/components";
import styles from "./recentRow.module.scss";

export const RecentRow = ({ sequence, data }) => {
  return (
    <Flex alignItems="center" className={styles.container}>
      <Box className={styles.sequenceBox}>{sequence + "."}</Box>
      <Box className={styles.winnerBox}>{data.winner}</Box>
      <Box className={styles.beatsBox}>beats</Box>
      <Box className={styles.loserBox}>{data.loser}</Box>
      <Box
        className={styles.resultBox}
      >{`(${data.wScore} - ${data.lScore})`}</Box>
      <Box className={styles.timeBox}>{"- " + data.when}</Box>
    </Flex>
  );
};
