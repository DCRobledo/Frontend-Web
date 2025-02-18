import React from 'react';
import Letter from "./Letter.jsx";

const Alphabet = ({onKeySelected}) => {
    const [alphabetLetters, setAlphabetLetters] = React.useState(
        Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i))
    );
    
    return (
        <div className={"alphabet-list"}>
                {alphabetLetters.map((value, index) => (
                    <Letter
                        key={index}
                        character={value}
                        onKeySelected={onKeySelected}
                    />
                ))}
        </div>
    );
};

export default Alphabet;