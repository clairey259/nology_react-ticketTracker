import React from "react";
import Styles from "./Navbar.module.scss";

import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = (props) => {
  const { updateSearchText } = props;
  return (
    <>
      <section>
        <SearchBox placeholder="Search for beers..." updateSearchText={updateSearchText}/>
      </section>
      <section>
        <FiltersList />
      </section>
    </>
  );
};

export default Navbar;
