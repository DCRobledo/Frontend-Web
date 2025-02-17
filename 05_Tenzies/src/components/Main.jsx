import React from 'react';
import Dice from "./Dice.jsx";

const Main = () => {
    return (
        <main>
            <ul className={"dice-list"}>
                <Dice/>
                <Dice/>
                <Dice/>
                <Dice/>
            </ul>
            <ul className={"dice-list"}>
                <Dice/>
                <Dice/>
                <Dice/>
                <Dice/>
            </ul>
            <button className={"roll-button"}>Roll</button>
        </main>
    );
};

export default Main;