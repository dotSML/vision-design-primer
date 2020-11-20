import React, { useState } from "react";
import "./App.css";
import styles from "./styles/layout.module.scss";
import { ReactComponent as Logo } from "./assets/ping-pong.svg";
import { StreakCard } from "./components/streakCard/StreakCard";
import { CardRow } from "./components/cardRow/CardRow";
import { RecentBoard } from "./components/recentBoard/RecentBoard";
import { recentActivity } from "./data/fakeRecentActivity";
import { Heading } from "@primer/components";
import { TopRankingBoard } from "./components/topRankingBoard/TopRankingBoard";
import { bestPlayers } from "./data/fakeBestPlayers";
import { Footer } from "./components/footer/Footer";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/darkTheme";
import { lightTheme } from "./styles/lightTheme";

function App() {
  const [darkMode, setTheme] = useState(true);
  const handleThemeChange = () => {
    setTheme(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className={styles.app}>
        <GlobalStyles />
        <div className={styles.mainBody}>
          <div className={styles.leftContent}>
            <div className={styles.logoContainer}>
              <Logo className={styles.logo} />{" "}
              <Heading marginLeft="20px" fontSize={3} mb={1} color="#fff">
                VisionPong
              </Heading>
            </div>
            <CardRow>
              <StreakCard
                heading="LONGEST WINNING STREAK"
                dataHeading="Natanel - 24"
              />
              <StreakCard
                heading="LONGEST LOSING STREAK"
                dataHeading="n00b - 69"
              />
            </CardRow>
            <RecentBoard data={recentActivity} />
          </div>
          <div className={styles.rightContent}>
            <TopRankingBoard data={bestPlayers} />
          </div>
        </div>
        <Footer theme={darkMode} handleThemeChange={handleThemeChange} />
      </div>
    </ThemeProvider>
  );
}

export default App;
