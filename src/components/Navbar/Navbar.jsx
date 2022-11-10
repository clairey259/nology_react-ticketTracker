import React from "react";
import Styles from './Navbar.modules.scss';

import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = () => {
  return (
    <>
      <section>
        <SearchBox />
      </section>
      <section>
        <FiltersList />
      </section>
    </>
  );
};

export default Navbar;
