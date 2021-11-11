import React from "react";
import styles from "./NumberGrid.module.css";

import { NumberButton } from "../../atoms";

const NumberGrid = () => {
    return (
        <div className={styles.container}>
            {Array.from(Array(50).keys()).map((x) => (
                <NumberButton key={x} value={x + 1} />
            ))}
        </div>
    );
};

export default NumberGrid;
