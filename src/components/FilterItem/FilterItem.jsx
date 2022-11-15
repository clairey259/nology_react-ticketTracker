import React from "react";
import Styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
  const { label, onTickChange, isTicked } = props;
  return (
    <div className={Styles.filterItem} data-testid="filterItem">
      <p>{label}</p>
      <input
        type="checkbox"
        checked={isTicked}
        onChange={(e) => {
          onTickChange(e.target.checked);
        }}
      />
    </div>
  );
};

export default FilterItem;
