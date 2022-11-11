import React from "react";
import Styles from './FiltersList.module.scss';

import FilterItem from "../FilterItem/FilterItem";

const FiltersList = () => {
  return (
    <>
      <div className={Styles.filtersList}>
        <FilterItem label="High ABV (> 6.0%)"/>
        <FilterItem label="Classic Range"/>
        <FilterItem label="Acidic (ph < 4)"/>
      </div>
    </>
  );
};

export default FiltersList;
