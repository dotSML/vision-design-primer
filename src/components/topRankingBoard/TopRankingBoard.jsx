import React from "react";
import styles from "./topRankingBoard.module.scss";
import { BorderBox, Flex, Heading } from "@primer/components";
import { borderColor } from "../../styles/colors";
import { BestPlayerRow } from "./components/bestPlayerRow/BestPlayerRow";

export const TopRankingBoard = ({ data }) => {
  return (
    <div className={styles.container}>
      <BorderBox borderColor={borderColor}>
        <Flex flexDirection="column" alignItems="center">
          <Heading fontSize={4} color="grey" mb={3}>
            TOP 10 PLAYERS
          </Heading>
          <div className={styles.rows}>
            {data.map((player, idx) => (
              <BestPlayerRow sequence={idx + 1} row={player} />
            ))}
          </div>
        </Flex>
      </BorderBox>
    </div>
  );
};
