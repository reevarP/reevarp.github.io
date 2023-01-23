import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import InfoPageContent from "../../Components/InfoPageContent/InfoPageContent";
import Navbar from "../../Components/Navbar/Navbar";
import { getCast, getCrew, getOneShow } from "../../Redux/Slices/mainPersistSlice";
import { getReq } from "../../Services/api";
import { BASE_URL } from "../../Services/constants";
import styles from "./infoPage.module.css";

const InfoPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const getInfoAboutOneShow = async () => {
    const res = await getReq(`${BASE_URL}/shows/${id}`);
    if (res && !res.error) {
      dispatch(getOneShow(res.data));
    } else {
      console.log(res.error);
    }
    const casRes = await getReq(`${BASE_URL}/shows/${id}/cast`);
    if (casRes && !casRes.error) {
      dispatch(getCast(casRes.data));
    } else {
      console.log(casRes.error);
    }
    const creRes = await getReq(`${BASE_URL}/shows/${id}/crew`);
    if (creRes && !creRes.error) {
      dispatch(getCrew(creRes.data));
    } else {
      console.log(creRes.error);
    }
  };

  useEffect(() => {
    getInfoAboutOneShow();
  }, [id]);
  return (
    <div className={styles.infoPageContainer}>
      <Navbar />
      <InfoPageContent />
    </div>
  );
};

export default InfoPage;
