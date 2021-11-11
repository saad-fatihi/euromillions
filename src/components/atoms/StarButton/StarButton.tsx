import React, { useContext } from "react";
import styles from "./StarButton.module.css";
import { AppContext } from "../../../App";
import { shoulDisable } from "../../../utils";
import multiples from "../../../assets/multiples.json";

type StarButtonProps = {
    value: number;
};

const StarButton = ({ value }: StarButtonProps) => {
    const { numbers, stars, dispatch } = useContext(AppContext);
    const checked = stars.indexOf(value) >= 0 ? true : false;
    const disabled =
        numbers.length > 4 && stars.length > 1
            ? shoulDisable([numbers.length, stars.length + 1], multiples)
            : false;
    return (
        <button
            disabled={!checked && disabled}
            className={`${styles.button} ${
                checked ? styles.checked : styles.unchecked
            }`}
            onClick={() => dispatch({ type: "star", payload: value })}
        >
            <span className={styles.star}>{value}</span>
        </button>
    );
};

export default StarButton;
