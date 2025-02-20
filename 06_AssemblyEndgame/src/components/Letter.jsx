import React, {useImperativeHandle} from 'react';

const Letter = ({ref, ...props}) => {
    const [buttonClassName, setButtonClassName] = React.useState("")
    const [hasBeenClicked, setHasBeenClicked] = React.useState(false);
    
    const onKeyClicked = (letterToSearch) => {
        const isLetterFound = props.onKeySelected(letterToSearch)
        setButtonClassName(isLetterFound ? "right" : "wrong")
        
        setHasBeenClicked(true)
    }

    useImperativeHandle(ref, () => {
        return {
            clickKey() {
                if (!hasBeenClicked) {
                    onKeyClicked(props.character)
                }
            },
            
            disableKey() {
                setHasBeenClicked(true)
            },
            enableKey() {
                setHasBeenClicked(false)
                setButtonClassName("")
            }
        }
    }, []);
    
    return (
        <button
            className={buttonClassName}
            style={{opacity: hasBeenClicked ? 0.7 : 1}}
            onClick={!hasBeenClicked ? (() => onKeyClicked(props.character)) : null}
        >
            {props.character}
        </button>
    );
};

export default Letter;