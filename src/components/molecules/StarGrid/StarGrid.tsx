import React from "react";
import styles from "./StarGrid.module.css";

import { StarButton } from "../../atoms";

const StarGrid = () => {
    return (
        <div className={styles.container}>
            {Array.from(Array(12).keys()).map((x) => (
                <StarButton value={x + 1} />
            ))}
        </div>
    );
};

export default StarGrid;
