import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./infoPageRighPanel.module.css";
import { AiFillStar } from "react-icons/ai";

const InfoPageRightPanel = () => {
  const singleShow = useSelector((state) => state.persist.singleShow);
  const cast = useSelector((state) => state.persist.cast);
  const crew = useSelector((state) => state.persist.crew);

  const [castNameArr, setCastNameArr] = useState([]);
  const [producer, setProducer] = useState([]);
  const [ratingInFive, setRatingInFive] = useState(0);
  useEffect(() => {
    if (cast) {
      let x = cast.map((curElem) => {
        return curElem.person.name;
      });
      setCastNameArr(x);
    }
    if (crew) {
      let x = crew.filter((curElem) => {
        return curElem.type === "Producer";
      });
      setProducer(x);
    }
  }, [cast, crew]);

  useEffect(() => {
    if (singleShow.rating) {
      setRatingInFive(Math.round(singleShow.rating.average / 2));
    }
  }, [singleShow]);
  console.log(ratingInFive);
  return (
    <div className={styles.container}>
      <div className={styles.firstLine}>
        <div className={styles.showName}>
          {singleShow && singleShow.name} ({singleShow.rating && singleShow.rating.average})
        </div>
        <div>
          {[...new Array(ratingInFive)].map(() => {
            return <AiFillStar color="#ffea00" fontSize={22} />;
          })}
        </div>
      </div>
      <div className={styles.secondLine}>
        <div>
          {singleShow.premiered && singleShow.premiered.split("-")[0]} | {singleShow && singleShow.runtime}mins |{" "}
          {producer &&
            producer.map((curElem, index, arr) => {
              if (index === arr.length - 1) {
                return `${curElem.person.name}`;
              } else {
                return `${curElem.person.name}, `;
              }
            })}
        </div>
        <div className={styles.castNames}>
          Cast:{" "}
          {castNameArr &&
            castNameArr.map((curElem, index, arr) => {
              if (index === arr.length - 1) {
                return `${curElem}`;
              } else {
                return `${curElem}, `;
              }
            })}
        </div>
      </div>
      <div>
        <div>Movie Description:</div>
        <div style={{ fontWeight: "500" }}>{singleShow.summary && singleShow.summary.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<b>", "").replaceAll("</b>", "")}</div>
      </div>
    </div>
  );
};

export default InfoPageRightPanel;
