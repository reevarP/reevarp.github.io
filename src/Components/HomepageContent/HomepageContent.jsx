import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./homePageContent.module.css";

const HomepageContent = () => {
  const navigateTo = useNavigate();
  const allShowsList = useSelector((state) => state.persist.allShowsList);
  const searchedShows = useSelector((state) => state.nopersist.searchedShows);
  const loading = useSelector((state) => state.nopersist.loading);

  const [showDetail, setShowDetail] = useState({});

  const [allGenre, setAllGenre] = useState([]);
  const [filteredByGenre, setFilteredByGenre] = useState({});

  const goToInfoPage = (id) => {
    navigateTo(`/${id}`);
  };

  useEffect(() => {
    if (allShowsList) {
      let g = allShowsList.map((curElem) => {
        return curElem.genres;
      });
      setAllGenre([...new Set(g.flat())]);
    }
  }, [allShowsList]);

  useEffect(() => {
    allGenre.forEach((curElem) => {
      let x = allShowsList.filter((cur) => {
        return cur.genres.includes(curElem);
      });
      setFilteredByGenre((prev) => {
        return {
          ...prev,
          [curElem]: x,
        };
      });
    });
  }, [allGenre, allShowsList]);

  return (
    <div className={styles.homePageContentContainer}>
      {loading ? (
        <div>Loading</div>
      ) : searchedShows.length > 0 ? (
        <div className={styles.searchedShowsContainer}>
          {searchedShows.map((cur) => {
            return (
              <div className={styles.singleItemCard} onMouseOver={() => setShowDetail(cur.show)} onMouseLeave={() => setShowDetail({})} onClick={() => goToInfoPage(cur.show.id)}>
                <div className={styles.itemImage}>
                  <img src={cur.show.image && cur.show.image.medium} alt="" />
                </div>
                {showDetail.id === cur.show.id && (
                  <div className={styles.itemDetails}>
                    <div className={styles.smallDetailName}>{cur.show.name}</div>
                    <div className={styles.infoLine}>
                      <div className={styles.runtime}>Runtime: {cur.show.runtime}</div>
                      <div className={cur.show.status === "Ended" ? styles.endedStatus : styles.otherStatus}>{cur.show.status}</div>
                    </div>
                    <div className={styles.rating}>Rating: {cur.show.rating.average}</div>
                    <div className={styles.summary}>{cur.show.summary.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<b>", "").replaceAll("</b>", "").slice(0, 150)}...</div>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>Click to view more</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        allGenre &&
        allGenre.map((curElem) => {
          return (
            <div className={styles.oneCategory}>
              <div className={styles.categoryHeading}>{curElem}</div>
              <div className={styles.allItemsInCategory}>
                <div className={styles.allItemsContainer}>
                  {filteredByGenre[curElem] &&
                    filteredByGenre[curElem].map((cur) => {
                      return (
                        <div className={styles.singleItemCard} onMouseOver={() => setShowDetail(cur)} onMouseLeave={() => setShowDetail({})} onClick={() => goToInfoPage(cur.id)}>
                          <div className={styles.itemImage}>
                            <img src={cur.image.medium} alt="" />
                          </div>
                          {showDetail.id === cur.id && (
                            <div className={styles.itemDetails}>
                              <div className={styles.smallDetailName}>{cur.name}</div>
                              <div className={styles.infoLine}>
                                <div className={styles.runtime}>Runtime: {cur.runtime}</div>
                                <div className={cur.status === "Ended" ? styles.endedStatus : styles.otherStatus}>{cur.status}</div>
                              </div>
                              <div className={styles.rating}>Rating: {cur.rating.average}</div>
                              <div className={styles.summary}>{cur.summary.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<b>", "").replaceAll("</b>", "").slice(0, 150)}...</div>
                              <div style={{ fontSize: "14px", fontWeight: "600" }}>Click to view more</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default HomepageContent;
