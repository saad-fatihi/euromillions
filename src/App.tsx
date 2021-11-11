import React, { Dispatch, useReducer } from "react";
import styles from "./App.module.css";
import { NumberGrid, StarGrid } from "./components/molecules";

type AppContextType = StateType & {
    dispatch: Dispatch<ActionType>;
};

export const AppContext = React.createContext({} as AppContextType);

type StateType = {
    numbers: number[];
    stars: number[];
};
const initialState: StateType = { numbers: [], stars: [] };

type ActionType =
    | { type: "number"; payload: number }
    | { type: "star"; payload: number };

const toogle = (tab: number[], elem: number): number[] => {
    const index = tab.indexOf(elem);
    if (index >= 0) {
        return tab.filter((_, idx) => index !== idx);
    } else {
        return [...tab, elem];
    }
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "number":
            return { ...state, numbers: toogle(state.numbers, action.payload) };
        case "star":
            return { ...state, stars: toogle(state.stars, action.payload) };
        default:
            throw new Error("unknown action");
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
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
        </AppContext.Provider>
    );
};

export default App;
