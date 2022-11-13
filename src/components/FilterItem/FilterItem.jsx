import React, { useState } from "react";
import Styles from "./FilterItem.module.scss";
import getBeers from "../../services/beer.service";

const FilterItem = (props) => {
  const { label, onTickChange, isTicked } = props;
  return (
    <div className={Styles.filterItem}>
      <p>{label}</p>
      <input
        type="checkbox"
        checked={isTicked}
        onChange={(e) => {
          onTickChange(e.target.checked)
        }}
      />
    </div>
  );
};

export default FilterItem;
