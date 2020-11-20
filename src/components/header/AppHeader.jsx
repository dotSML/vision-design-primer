import React from "react";
import { Header } from "@primer/components"
import styles from "./header.module.scss";

export const AppHeader = () => {

    return <Header>
        <Header.Item>
            <Header.Link href="#" fontSize={2}>
                ITEM
            </Header.Link>
        </Header.Item>
    </Header>
}
