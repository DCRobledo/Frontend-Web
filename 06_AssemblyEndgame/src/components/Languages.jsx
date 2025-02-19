import React, {useImperativeHandle} from 'react';

const Languages = ({ref}) => {
    const [languages, setLanguages] = React.useState([
        {
            id: 1,
            text: "HTML",
            color: "white",
            backgroundColor: "#E2680F"
        },
        {
            id: 2,
            text: "CSS",
            color: "white",
            backgroundColor: "#328AF1"
        },
        {
            id: 3,
            text: "JavaScript",
            color: "black",
            backgroundColor: "#F4EB13"
        },
        {
            id: 4,
            text: "React",
            color: "black",
            backgroundColor: "#2ED3E9"
        },
        {
            id: 5,
            text: "TypeScript",
            color: "white",
            backgroundColor: "#298EC6"
        },
        {
            id: 6,
            text: "Node.js",
            color: "white",
            backgroundColor: "#599137"
        },
        {
            id: 7,
            text: "Python",
            color: "black",
            backgroundColor: "#FFD742"
        },
        {
            id: 8,
            text: "Ruby",
            color: "white",
            backgroundColor: "#D02B2B"
        },
        {
            id: 9,
            text: "Assembly",
            color: "white",
            backgroundColor: "#2D519F"
        }
    ]);
    
    useImperativeHandle(ref, () => {
        return {
            killLanguage(index) {
                console.log(languages[index].text);
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
                </p>
            ))}
        </div>
    );
};

export default Languages;