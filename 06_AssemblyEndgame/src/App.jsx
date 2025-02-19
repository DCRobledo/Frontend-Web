import React, {useEffect, useRef} from "react";

import Header from "./components/Header.jsx";
import Languages from "./components/Languages.jsx";
import Word from "./components/Word.jsx";
import Alphabet from "./components/Alphabet.jsx";

import {generate} from "random-words";

const App = () => {
    const languagesRef = useRef(null);
    
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
        
        return isLetterFound
    }

    useEffect(() => {
        if (numOfMistakes > 0 && numOfMistakes < 8) {
            languagesRef.current?.killLanguage(numOfMistakes);
        }
    }, [numOfMistakes]);
    
    return (
        <>
            <Header />
            <main>
                <Languages ref={languagesRef}/>
                <Word 
                    randomWordLetters={randomWordLetters}
                />
                <Alphabet 
                    onKeySelected={lookForLetter}
                />
            </main>
        </>
    );
};

export default App;