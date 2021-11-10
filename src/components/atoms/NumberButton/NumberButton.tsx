import React, { useState } from "react";
import styles from "./NumberButton.module.css";

type NumberButtonProps = {
    value: number;
};

const NumberButton = ({ value }: NumberButtonProps) => {
    const [checked, setChecked] = useState(false);
    return (
        <button
            className={`${styles.button} ${
                checked ? styles.checked : styles.unchecked
            }`}
            onClick={() => setChecked(!checked)}
        >
            {value}
        </button>
    );
};

export default NumberButton;
