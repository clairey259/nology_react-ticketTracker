import React from "react";
import Styles from "./Navbar.module.scss";

import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = (props) => {
  const { isAbvTicked, onAbvTickChange, setSearchTerm, setAcidityTicked, setClassicRangeTicked } =
    props;
  return (
    <>
      <div className={Styles.navComponents}>
        <section>
          <SearchBox
            placeholder="Search for beers..."
            setSearchTerm={setSearchTerm}
          />
        </section>
        <section>
          <FiltersList
            isAbvTicked={isAbvTicked}
            onAbvTickChange={onAbvTickChange}
            setAcidityTicked={setAcidityTicked}
            setClassicRangeTicked={setClassicRangeTicked}
          />
        </section>
      </div>
    </>
  );
};

export default Navbar;
