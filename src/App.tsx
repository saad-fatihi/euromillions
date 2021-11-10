import React from "react";
import styles from "./App.module.css";
import { NumberGrid, StarGrid } from "./components/molecules";

const App = () => {
    return (
        <>
            <h1 className={styles.header}>EuroMillions</h1>
            <div className={styles.container}>
                <div className={styles.top}>
                    <span className={styles.title}>Grille</span>
                </div>
                <div className={styles.body}>
                    <NumberGrid />
                    <StarGrid />
                </div>
                <div className={styles.bottom}>
                    <span className={styles.label}>Mise totale</span>
                    <span className={styles.price}>0 €</span>
                    <button className={styles.play}>Jouer</button>
                </div>
            </div>
        </>
    );
};

export default App;
