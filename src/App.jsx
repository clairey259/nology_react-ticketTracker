import Styles from "./App.module.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className={Styles.page}>
        <section className={Styles.main}>
          <Main />
        </section>
        <section className={Styles.navbar}>
          <Navbar />
        </section>
      </div>
    </>
  );
};

export default App;
