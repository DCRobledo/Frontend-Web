import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";

const App = () => {
    return (
        <>
            <Header />
            <ul className={"entry-list"}>
                <Entry />
            </ul>
            
        </>
    );
};

export default App;
