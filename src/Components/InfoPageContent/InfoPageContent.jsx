import React from "react";
import { useSelector } from "react-redux";
import styles from "./infoPageContent.module.css";
import InfoPageLeftPanel from "./InfoPageLeftPanel/InfoPageLeftPanel";
import InfoPageRightPanel from "./InfoPageRightPanel/InfoPageRightPanel";

const InfoPageContent = () => {
  const singleShow = useSelector((state) => state.persist.singleShow);
  return (
    <div className={styles.infoPageContentContainer}>
      <InfoPageLeftPanel />
      <InfoPageRightPanel />
    </div>
  );
};

export default InfoPageContent;
