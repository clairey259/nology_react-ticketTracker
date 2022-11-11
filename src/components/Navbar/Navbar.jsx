import React from "react";
import Styles from "./Navbar.module.scss";

import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = (props) => {
  const { updateSearchText } = props;
  return (
    <>
      <div className={Styles.navComponents}>
        <section>
          <SearchBox
            placeholder="Search for beers..."
            updateSearchText={updateSearchText}
          />
        </section>
        <section>
          <FiltersList />
        </section>
      </div>
    </>
  );
};

export default Navbar;
