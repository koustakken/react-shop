import Header from "./components/Header";
import Category from "./components/Category";
import Sort from "./components/Sort";
import Card from "./components/Card";

import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Category />
      <Sort />
      <>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </>
    </div>
  );
}

export default App;
