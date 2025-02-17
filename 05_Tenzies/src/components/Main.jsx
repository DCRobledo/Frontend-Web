import React, {useEffect, useState} from 'react';
import Confetti from "react-confetti";

const Main = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [shouldResetGame, setShouldResetGame] = useState(false);
    const [mainButtonText, setMainButtonText] = React.useState('Roll');
    
    const [dicesValues, setDicesValues] = React.useState([]);
    const [frozenDicesIndexes, setFrozenDicesIndexes] = React.useState(Array(8).fill(false));
    
    function rollDices() {
        const newDiceValues = Array(8);
        
        for (let i = 0; i < newDiceValues.length; i += 1) 
        {
            newDiceValues[i] = frozenDicesIndexes[i] ? dicesValues[i] : (Math.floor(Math.random() * 6) + 1)
        }
        
        setDicesValues(newDiceValues)
    }

    useEffect(() => {
        rollDices()
    }, []);
    
    function onDiceClicked(diceIndex) {
        if (!isGameOver)
        {
            const newFrozenDicesIndexes = Array.from(frozenDicesIndexes);
            newFrozenDicesIndexes[diceIndex] = !frozenDicesIndexes[diceIndex];
            setFrozenDicesIndexes(newFrozenDicesIndexes);

            checkWin();
        }
    }

    function checkWin() {
        if (dicesValues.length > 0)
        {
            const areAllDicesEqual = dicesValues.every(value => value === dicesValues[0]);
            if (areAllDicesEqual) {
                console.log("You Won!")
                
                setMainButtonText("Play Again")
                setIsGameOver(true);
            }
        }
    }
    
    function resetGame() {
        const newFrozenDicesIndexes = Array(8).fill(false);
        setFrozenDicesIndexes(newFrozenDicesIndexes);
        
        setMainButtonText("Roll")
        setIsGameOver(false);

        setShouldResetGame(true)
    }
    
    useEffect(() => {
        if (shouldResetGame)
        {
            rollDices()
            setShouldResetGame(false)
        }
    }, [shouldResetGame])
    
    return (
        <main>
            <ul className={"dice-list"}>
                {dicesValues.map((value, index) => (
                    <button
                        className={`dice ${frozenDicesIndexes[index] ? "frozen" : ""}`}
                        key={index}
                        onClick={() => onDiceClicked(index)}
                    >
                        {value}
                    </button>

                ))}
            </ul>
            <button
                className={"roll-button"}
                onClick={isGameOver ? resetGame : rollDices}
            >
                {mainButtonText}
            </button>
            {isGameOver && <Confetti />}
        </main>
    );
};

export default Main;