import React from "react";
import Styles from "./Card.module.scss";

const Card = (props) => {
  const { name, image_url, tagline, ph } = props.beer;
  return (
    <>
      <div className={Styles.card}>
        <img src={image_url} alt={`${name}`} />
        <div className={Styles.beerDetails}>
          <h2>{name}</h2>
          <p>{tagline}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
