import React from "react";
import Styles from "./SearchBox.module.scss";

const SearchBox = (props) => {
  const { placeholder } = props;
  return (
    <div className={Styles.searchBox}>
      {/* <input
        type="text"
        placeholder={placeholder}
        onInput={(e) => updateSearchText(e.target.value)}
      /> */}
    </div>
  );
};

export default SearchBox;
