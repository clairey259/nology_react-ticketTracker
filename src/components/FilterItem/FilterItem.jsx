import React from 'react';
import Styles from './FilterItem.module.scss';

const FilterItem = (props) => {
  const { label } = props;
  return (
    <div className={Styles.filterItem}>
      <p>{label}</p>
      <input type="checkbox" />
    </div>
  )
}

export default FilterItem