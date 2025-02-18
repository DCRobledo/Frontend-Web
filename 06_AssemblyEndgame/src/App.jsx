import React from "react";

import Header from "./components/Header.jsx";
import Languages from "./components/Languages.jsx";
import Word from "./components/Word.jsx";
import Alphabet from "./components/Alphabet.jsx";

import {generate} from "random-words";


const App = () => {
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
        console.log(letter);
        
        let isLetterFound = false;
        const newRandomWordLetters = Array.from(randomWordLetters)
        
        for (let i = 0; i < newRandomWordLetters.length; i++) {
            if (newRandomWordLetters[i].letter === letter) {
                newRandomWordLetters[i].isShown = true;
                isLetterFound = true;
            }
        }
        
        setRandomWordLetters(newRandomWordLetters)
        return isLetterFound
    }
    
    return (
        <>
            <Header />
            <main>
                <Languages />
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