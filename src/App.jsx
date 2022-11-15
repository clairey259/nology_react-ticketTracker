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
  const [isClassicRangeTicked, setClassicRangeTicked] = useState(false);

  const updateBeers = () => {
    getBeers(
      isAbvTicked,
      isClassicRangeTicked,
      isAcidityTicked,
      searchTerm
    ).then((beers) => setBeers(beers));
  };

  useEffect(() => {
    updateBeers();
  }, [isAbvTicked, searchTerm, isAcidityTicked, isClassicRangeTicked]);

  return (
    <>
      <div className={Styles.page}>
        <section className={Styles.navbar} data-testid="navbar">
          <Navbar
            isAbvTicked={isAbvTicked}
            onAbvTickChange={setAbvTicked}
            setAcidityTicked={setAcidityTicked}
            setSearchTerm={setSearchTerm}
            setClassicRangeTicked={setClassicRangeTicked}
          />
        </section>
        <section className={Styles.main} data-testid="main">
          <Main beers={beers} />
        </section>
      </div>
    </>
  );
};

export default App;
