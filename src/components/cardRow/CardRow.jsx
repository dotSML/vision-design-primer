import React from "react";
import styles from "./cardRow.module.scss";
import {Flex} from "@primer/components"

export const CardRow = ({children}) => {

    return <Flex justifyContent="space-around">{children}</Flex>
}
