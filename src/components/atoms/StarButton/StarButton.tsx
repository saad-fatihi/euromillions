import React, { useState } from "react";
import styles from "./StarButton.module.css";

type StarButtonProps = {
    value: number;
};

const StarButton = ({ value }: StarButtonProps) => {
    const [checked, setChecked] = useState(false);
    return (
        <button
            className={`${styles.button} ${
                checked ? styles.checked : styles.unchecked
            }`}
            onClick={() => setChecked(!checked)}
        >
            <span className={styles.star}>{value}</span>
        </button>
    );
};

export default StarButton;
