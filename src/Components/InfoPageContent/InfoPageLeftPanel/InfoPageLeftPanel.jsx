import React from "react";
import { useSelector } from "react-redux";
import styles from "./infoPageLeftPanel.module.css";

const InfoPageLeftPanel = () => {
  const singleShow = useSelector((state) => state.persist.singleShow);
  return (
    <div className={styles.container}>
      <img src={singleShow.image && singleShow.image.original} alt="" />
    </div>
  );
};

export default InfoPageLeftPanel;
