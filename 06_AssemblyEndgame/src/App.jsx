import React, {useEffect, useRef} from "react";

import Header from "./components/Header.jsx";
import Languages from "./components/Languages.jsx";
import Word from "./components/Word.jsx";
import Alphabet from "./components/Alphabet.jsx";

import {generate} from "random-words";

const App = () => {
    const gameOverMessage = `Game over!
    You lose! Better start learning Assembly 😭`
    const winMessage = `You win!
    Well done 🎉`
    
    const languagesRef = useRef(null);
    const alphabetRef = useRef(null);
    
    const [numOfMistakes, setNumOfMistakes] = React.useState(0);
    
    const [randomWordLetters, setRandomWordLetters] = React.useState(generateRandomWord())
    function generateRandomWord() {
        let newRandomWord = generate({ minLength: 8, maxLength: 8 });
        newRandomWord = newRandomWord.toUpperCase();

        return Array.from(newRandomWord, (char) => ({
            letter: char,
            isShown: false
        }))
    }
    
    function lookForLetter(letter) {
        if (isGameOver())
        {
            return;
        }
        
        let isLetterFound = false;
        const newRandomWordLetters = Array.from(randomWordLetters)
        
        for (let i = 0; i < newRandomWordLetters.length; i++) {
            if (newRandomWordLetters[i].letter === letter) {
                newRandomWordLetters[i].isShown = true;
                isLetterFound = true;
            }
        }

        setRandomWordLetters(newRandomWordLetters)

        if (!isLetterFound) {
            setNumOfMistakes(prev => {
                return prev + 1
            });
        }
        else {
            languagesRef.current?.changeMistakeMessage("");
        }
        
        return isLetterFound
    }

    useEffect(() => {
        if (numOfMistakes <= 0)
        {
            return;
        }
        
        if (isGameOver()) {
            alphabetRef.current?.disableAlphabet();
            languagesRef.current?.changeMistakeMessage(gameOverMessage, "#BA2A2A");
        }
        else {
            languagesRef.current?.killLanguage(numOfMistakes);
        }
    }, [numOfMistakes]);
    
    function isGameOver() {
        return numOfMistakes > 7;
    }
    
    useEffect(() => {
        if (isWin())
        {
            alphabetRef.current?.disableAlphabet();
            languagesRef.current?.changeMistakeMessage(winMessage, "#10A95B")
        }
        
    }, [randomWordLetters])
    
    function isWin() {
        let isWin = true;
        
        randomWordLetters.map((letter) => {
            if (!letter.isShown) {
                isWin = false
            }
        })
        
        return isWin 
    }
    
    function startNewGame() {
        setNumOfMistakes(0);
        setRandomWordLetters(generateRandomWord())
        languagesRef.current?.onGameStarted()
        alphabetRef.current?.enableAlphabet()
    }
    
    return (
        <>
            <Header/>
            <main>
                <Languages ref={languagesRef}/>
                <Word 
                    randomWordLetters={randomWordLetters}
                />
                <Alphabet
                    ref={alphabetRef}    
                    onKeySelected={lookForLetter}
                />
                {
                    (isGameOver() || isWin()) &&
                    <div className={"play-again-button-container"}>
                        <button className={"play-again-button"} onClick={startNewGame}>New Game</button>
                    </div>
                }

            </main>
        </>
    );
};

export default App;