import React from 'react';
import Styles from './Card.module.scss';

const Card = () => {
  return (
    <>
    <div className={Styles.card}>
      <img></img>
      <div className={Styles.beerDetails}>
         <h2>Beer Name</h2>
          <p>Beer Description</p>
      </div>
    </div>
    </>
  )
}

export default Card