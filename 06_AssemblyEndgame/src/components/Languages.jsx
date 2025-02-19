import React, {useImperativeHandle} from 'react';

const Languages = ({ref}) => {
    const [languages, setLanguages] = React.useState([
        {
            id: 1,
            text: "HTML",
            color: "white",
            backgroundColor: "#E2680F",
            isAlive: true,
        },
        {
            id: 2,
            text: "CSS",
            color: "white",
            backgroundColor: "#328AF1",
            isAlive: true,
        },
        {
            id: 3,
            text: "JavaScript",
            color: "black",
            backgroundColor: "#F4EB13",
            isAlive: true,
        },
        {
            id: 4,
            text: "React",
            color: "black",
            backgroundColor: "#2ED3E9",
            isAlive: true,
        },
        {
            id: 5,
            text: "TypeScript",
            color: "white",
            backgroundColor: "#298EC6",
            isAlive: true,
        },
        {
            id: 6,
            text: "Node.js",
            color: "white",
            backgroundColor: "#599137",
            isAlive: true,
        },
        {
            id: 7,
            text: "Python",
            color: "black",
            backgroundColor: "#FFD742",
            isAlive: true,
        },
        {
            id: 8,
            text: "Ruby",
            color: "white",
            backgroundColor: "#D02B2B",
            isAlive: true,
        },
        {
            id: 9,
            text: "Assembly",
            color: "white",
            backgroundColor: "#2D519F",
            isAlive: true,
        }
    ]);
    
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
            }
        }
    }, []);
    
    return (
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
    );
};

export default Languages;