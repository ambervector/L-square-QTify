import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search() {
  const onSubmit = (e) => {
    e.preventDefault();
    // submission logic goes here
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search an album of your choice"
        required
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
