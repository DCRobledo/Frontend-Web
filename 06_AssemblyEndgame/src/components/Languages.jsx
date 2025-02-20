import React, {useImperativeHandle} from 'react';

const Languages = ({ref}) => {
    const [languages, setLanguages] = React.useState([
        {
            id: 1,
            text: "HTML",
            mistakeMessage: "HTML, it's been real",
            color: "white",
            backgroundColor: "#E2680F",
            isAlive: true,
        },
        {
            id: 2,
            text: "CSS",
            mistakeMessage: "Oh no, not CSS!",
            color: "white",
            backgroundColor: "#328AF1",
            isAlive: true,
        },
        {
            id: 3,
            text: "JavaScript",
            mistakeMessage: "R.I.P., JavaScript",
            color: "black",
            backgroundColor: "#F4EB13",
            isAlive: true,
        },
        {
            id: 4,
            text: "React",
            mistakeMessage: "See you later, React",
            color: "black",
            backgroundColor: "#2ED3E9",
            isAlive: true,
        },
        {
            id: 5,
            text: "TypeScript",
            mistakeMessage: "I won't miss you, TypeScript 🫡",
            color: "white",
            backgroundColor: "#298EC6",
            isAlive: true,
        },
        {
            id: 6,
            text: "Node.js",
            mistakeMessage: "Who were you again, Node.js?",
            color: "white",
            backgroundColor: "#599137",
            isAlive: true,
        },
        {
            id: 7,
            text: "Python",
            mistakeMessage: "People were right about you, Python",
            color: "black",
            backgroundColor: "#FFD742",
            isAlive: true,
        },
        {
            id: 8,
            text: "Ruby",
            mistakeMessage: "Ruby, it's not you, it's me",
            color: "white",
            backgroundColor: "#D02B2B",
            isAlive: true,
        },
        {
            id: 9,
            text: "Assembly",
            mistakeMessage: "There's no way you're dead too Assembly...",
            color: "white",
            backgroundColor: "#2D519F",
            isAlive: true,
        }
    ]);
    
    const [mistakeMessage, setMistakeMessage] = React.useState("");
    const [mistakeBackgroundColor, setMistakeBackgroundColor] = React.useState("#7A5EA7");
    
    useImperativeHandle(ref, () => {
        return {
            killLanguage(index) {
                setLanguages(prevState => {
                    const newLanguages = [...prevState]
                    const targetLanguageIndex = newLanguages.findIndex(language => language.id === index);
                    if (targetLanguageIndex !== -1) {
                        newLanguages[targetLanguageIndex] = {...newLanguages[targetLanguageIndex], isAlive: false};
                    }
                    return newLanguages;
                })
                
                setMistakeMessage(languages[index-1].mistakeMessage)
            },
            
            changeMistakeMessage(newMistakeMessage, newMistakeBackgroundColor)
            {
                setMistakeMessage(newMistakeMessage);
                setMistakeBackgroundColor(newMistakeBackgroundColor)
            },
            
            onGameStarted() {
                setLanguages(prevState => {
                    const newLanguages = [...prevState]
                    newLanguages.forEach(language => {language.isAlive = true})
                    return newLanguages;
                })
                
                setMistakeMessage("")
            }
        }
    }, []);
    
    return (
        <>
            <p 
                className={"mistake-message"}
                style={{opacity: mistakeMessage.length > 0 ? 1 : 0, backgroundColor: mistakeBackgroundColor}}
            >
                {mistakeMessage}
            </p>
            <div className={"languages-list"}>
                {languages.map((language) => (
                    <p
                        key={language.id}
                        style={{backgroundColor: language.backgroundColor, color: language.color}}
                    >
                        {language.text}
                        <span 
                            className={"language-killed-overlay"}
                            style={{opacity: language.isAlive ? 0 : 1}}
                        >
                            💀
                        </span>
                    </p>
                ))}
            </div>
        </>
    );
};

export default Languages;