import React from 'react';

const Word = ({randomWordLetters}) => {
    return (
        <div className={"word-letters"}>
            {randomWordLetters.map((value, index) => (
                <p key={index}>{value.isShown && value.letter}</p>
            ))}
        </div>
    );
};

export default Word;