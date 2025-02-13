import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";

import data from "./data.js";

const App = () => {
    const entryElements = data.map((item) => {
        return (
            <Entry 
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className={"entry-list"}>
                {entryElements}
            </main>
        </>
    );
};

export default App;
