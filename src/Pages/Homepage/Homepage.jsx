import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomepageContent from "../../Components/HomepageContent/HomepageContent";
import Navbar from "../../Components/Navbar/Navbar";
import { saveAllShows } from "../../Redux/Slices/mainPersistSlice";
import { getReq } from "../../Services/api";
import { BASE_URL } from "../../Services/constants";
import styles from "./homepage.module.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const getAllShows = async () => {
    const res = await getReq(`${BASE_URL}/shows`);
    if (res && !res.error) {
      dispatch(saveAllShows(res.data));
    } else {
      console.log(res.erro);
    }
  };

  useEffect(() => {
    getAllShows();
  }, []);

  return (
    <div className={styles.homePageContainer}>
      <Navbar />
      <HomepageContent />
    </div>
  );
};

export default Homepage;
