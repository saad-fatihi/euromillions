import React, { useContext } from "react";
import styles from "./NumberButton.module.css";
import { AppContext } from "../../../App";
import { shoulDisable } from "../../../utils";
import multiples from "../../../assets/multiples.json";

type NumberButtonProps = {
    value: number;
};

const NumberButton = ({ value }: NumberButtonProps) => {
    const { numbers, stars, dispatch } = useContext(AppContext);
    const checked = numbers.indexOf(value) >= 0 ? true : false;
    const disabled =
        numbers.length > 4 && stars.length > 1
            ? shoulDisable([numbers.length + 1, stars.length], multiples)
            : false;
    return (
        <button
            disabled={!checked && (disabled || numbers.length === 10)}
            className={`${styles.button} ${
                checked ? styles.checked : styles.unchecked
            }`}
            onClick={() => dispatch({ type: "number", payload: value })}
        >
            {value}
        </button>
    );
};

export default NumberButton;
