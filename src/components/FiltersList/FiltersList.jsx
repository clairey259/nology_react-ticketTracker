import React from "react";
import Styles from "./FiltersList.module.scss";

import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {
  const {
    isAbvTicked,
    onAbvTickChange,
    setAcidityTicked,
    setClassicRangeTicked,
  } = props;
  return (
    <>
      <div className={Styles.filtersList}>
        <FilterItem
          label="High ABV (> 6.0%)"
          isTicked={isAbvTicked}
          onTickChange={onAbvTickChange}
        />
        <FilterItem
          label="Classic Range"
          setClassicRangeTicked={setClassicRangeTicked}
          onTickChange={setClassicRangeTicked}
        />
        <FilterItem
          label="Acidic (ph < 4)"
          setAcidityTicked={setAcidityTicked}
          onTickChange={setAcidityTicked}
        />
      </div>
    </>
  );
};

export default FiltersList;
