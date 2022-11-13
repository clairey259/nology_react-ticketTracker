import React, { useEffect, useState } from "react";
import Styles from "./App.module.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import getBeers from "./services/beer.service";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [isAbvTicked, setAbvTicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAcidityTicked, setAcidityTicked] = useState(false);

  const updateBeers = () => {
    getBeers(isAbvTicked, false, isAcidityTicked, searchTerm).then((beers) => setBeers(beers));
  };
  


  useEffect(() => {
    updateBeers();
  }, [isAbvTicked, searchTerm, isAcidityTicked]);

 

  // const onAbvTickChange = (isTicked) => {
  //   setAbvTicked(isTicked);


  return (
    <>
      <div className={Styles.page}>
        <section className={Styles.navbar}>
          <Navbar
            isAbvTicked={isAbvTicked}
            onAbvTickChange={setAbvTicked}
            setAcidityTicked={setAcidityTicked}
            setSearchTerm={setSearchTerm}
          />
        </section>
        <section className={Styles.main}>
          <Main beers={beers} />
        </section>
      </div>
    </>
  );
};

export default App;
