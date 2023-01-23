import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReq } from "../../Services/api";
import { BASE_URL } from "../../Services/constants";
import debounce from "lodash.debounce";
import { saveSearchedShows, updateLoadingState } from "../../Redux/Slices/noPersistSlice";

const Navbar = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const handleSearchInput = (event) => {
    const val = event.target.value;
    setSearchString(val);
  };

  useEffect(() => {
    if (searchString.length > 0) {
      navigateTo("/");
    }
    debouncedSearch(searchString);
  }, [searchString]);

  const searchFunction = async () => {
    dispatch(updateLoadingState(true));
    const res = await getReq(`${BASE_URL}/search/shows?q=${searchString}`);
    if (res && !res.error) {
      dispatch(saveSearchedShows(res.data));
      dispatch(updateLoadingState(false));
    } else {
      console.log(res.error);
    }
  };

  const debouncedSearch = debounce(searchFunction, 800);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo} onClick={() => navigateTo("/")}>
        TV MAZE
      </div>
      <div className={styles.searchBox}>
        <input type="text" value={searchString} onChange={handleSearchInput} style={{ borderRadius: "4px 0 0 4px", border: "none", outline: "none", paddingLeft: "0.5rem" }} />
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
