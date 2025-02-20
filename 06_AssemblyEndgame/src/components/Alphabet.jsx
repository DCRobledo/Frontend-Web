import React, {useEffect, useImperativeHandle} from 'react';
import Letter from "./Letter.jsx";

const Alphabet = ({ref, onKeySelected}) => {
    const letterRefs = React.useRef([])
    const [alphabetLetters, setAlphabetLetters] = React.useState([])
    
    useEffect(() => {
        const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i))
        setAlphabetLetters(alphabet)
    }, [])
    
    useImperativeHandle(ref, () => {
        return {
            disableAlphabet() {
                alphabetLetters.map((value, index) => {
                    letterRefs.current[index]?.disableKey()
                })

                window.removeEventListener("keydown", onKeyPressed);
            },
            enableAlphabet() {
                alphabetLetters.map((value, index) => {
                    letterRefs.current[index]?.enableKey()
                })

                window.addEventListener("keydown", onKeyPressed);
            }
        }
    }, [alphabetLetters])
    
    const onKeyPressed = (event) => {
        const key = event.key.toUpperCase()
        if (/^[A-Z]/.test(key))
        {
            alphabetLetters.forEach((value, index) => {
                if (value === key)
                {
                    letterRefs.current[index]?.clickKey()
                }
            })
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", onKeyPressed);
        return () => window.removeEventListener("keydown", onKeyPressed);
    }, [alphabetLetters])
    
    return (
        <div className={"alphabet-list"}>
            {alphabetLetters.map((value, index) => {
                return (
                    <Letter
                        ref={(el) => (letterRefs.current[index] = el)}
                        key={index}
                        character={value}
                        onKeySelected={onKeySelected}
                    />
                )
            })}  
        </div>
    );
};

export default Alphabet;