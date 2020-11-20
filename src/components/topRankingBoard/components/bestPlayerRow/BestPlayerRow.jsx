import React from "react";
import { Flex, Box, Label, Heading } from "@primer/components";
import { StarFillIcon } from "@primer/octicons-react";
import styles from "./bestPlayerRow.module.scss";

export const BestPlayerRow = ({ sequence, row }) => {
  return (
    <Heading className={styles.container} mb={2}>
      <Flex className={styles.container} justifyContent="space-between">
        <Flex>
          <Box mr={2} className={styles.sequenceBox}>
            {sequence + "."}
          </Box>
          <Box>
            <Flex alignItems="center">
              {row.name}{" "}
              {sequence === 1 && <StarFillIcon size={28} marginLeft={10} />}
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Label
            ml={2}
            bg="#99B898"
            className={styles.eloBox}
            color="#2A363B"
            size="xl"
          >
            {row.elo}
          </Label>
        </Box>
      </Flex>
    </Heading>
  );
};
