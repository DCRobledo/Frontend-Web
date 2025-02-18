import React, {useEffect} from 'react';
import Letter from "./Letter.jsx";
import letter from "./Letter.jsx";

const Alphabet = ({onKeySelected}) => {
    const [alphabetLetters, setAlphabetLetters] = React.useState(generateAlphabetLetters())
    
    function generateAlphabetLetters() {
        const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i))
        const letters = []
        alphabet.map((value, index) => {
            letters.push(
                <Letter
                    key={index}
                    character={value}
                    onKeySelected={onKeySelected}
                />
            )
        })
        return letters;
    }
    
    const onKeyPressed = (event) => {
        const key = event.key.toUpperCase()
        if (/^[A-Z]/.test(key))
        {
            alphabetLetters.map(({props}) => {
                if (props.character === key) 
                {
                    onKeySelected(key)
                }
            })
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", onKeyPressed);
        return () => window.removeEventListener("keydown", onKeyPressed);
    }, [])
    
    return (
        <div className={"alphabet-list"}>
            {alphabetLetters}  
        </div>
    );
};

export default Alphabet;