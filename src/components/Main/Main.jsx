import React from "react";
import Styles from "./Main.module.scss";
import CardList from "../CardList/CardList";


const Main = (props) => {
  const { beers } = props;
  return (
    <section>
      <CardList beers={beers}/>
    </section>
  );
};

export default Main;
