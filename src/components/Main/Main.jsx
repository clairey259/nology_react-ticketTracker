import React from 'react'
import Styles from './Main.module.scss';
import CardList from '../CardList/CardList'
import getBeers from '../../services/beer.service';

const Main = () => {
  return (
    
    <section>
      <CardList />
    </section>
  )
}

export default Main