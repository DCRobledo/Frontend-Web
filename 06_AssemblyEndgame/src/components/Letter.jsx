﻿import React from 'react';

const Letter = ({character, onKeySelected}) => {
    const [buttonClassName, setButtonClassName] = React.useState("")
    const [hasBeenClicked, setHasBeenClicked] = React.useState(false);
    
    const onKeyClicked = (letterToSearch) => {
        const isLetterFound = onKeySelected(letterToSearch)
        setButtonClassName(isLetterFound ? "right" : "wrong")
        
        setHasBeenClicked(true)
    }
    
    return (
        <button
            className={buttonClassName}
            onClick={!hasBeenClicked ? (() => onKeyClicked(character)) : null}
        >
            {character}
        </button>
    );
};

export default Letter;