import React from "react";
import Styles from "./Main.module.scss";
import CardList from "../CardList/CardList";
import getBeers from "../../services/beer.service";

const Main = (props) => {
  const { beers } = props;
  return (
    <section>
      <CardList beers={beers}/>
    </section>
  );
};

export default Main;
