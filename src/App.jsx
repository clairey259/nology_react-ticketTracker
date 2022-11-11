import React, { useState } from "react";
import Styles from "./App.module.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import getBeers from "./services/beer.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const updateBeers = async (searchTerm) => {
      const apiBeers = await getBeers(searchTerm);
      setBeers(apiBeers)
  }
  return (
    <>
      <div className={Styles.page}>
        <section className={Styles.navbar}>
          <Navbar updateSearchText={updateBeers}/>
        </section>        
        <section className={Styles.main}>
          <Main beers={beers}/>
        </section>
      </div>
    </>
  );
};

export default App;
