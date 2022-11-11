import React from 'react';
import Styles from './Card.module.scss';

const Card = (props) => {
  const { 
    name, 
    description, 
    image_url,
    tagline
  } = props.beer;
  return (
    <>
    <div className={Styles.card}>
      <img src={image_url} alt={`image of ${name}`} />
      <div className={Styles.beerDetails}>
         <h2>{name}</h2>
          <p>{tagline}</p>
      </div>
    </div>
    </>
  )
}

export default Card