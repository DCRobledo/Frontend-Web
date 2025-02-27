import {useState, useEffect} from "react";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageURL: "http://i.imgflip.com/1bij.jpg"
    });

    function onMemeTextChanged(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    const [allMemes, setAllMemes] = useState([])
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getNewMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const randomMeme = allMemes[randomIndex];
        
        let newMemeImageURL = randomMeme.url

        setMeme(prevMeme => ({
            ...prevMeme,
            imageURL: newMemeImageURL
        }))
    }    
    
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={onMemeTextChanged}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={onMemeTextChanged}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getNewMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageURL} alt={"Meme Image"} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}