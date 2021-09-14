import React from "react";
import styles from "./Views.Module.css";

const HomeView = () => (
  <div className={styles.h}>
    <h1>
      Добро пожаловать <br/> на сайт <p className={styles.h1}>PHONEBOOK</p>
    </h1>
  </div>
);

export default HomeView;