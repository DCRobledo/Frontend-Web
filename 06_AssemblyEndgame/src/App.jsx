import Header from "./components/Header.jsx";
import Languages from "./components/Languages.jsx";
import Word from "./components/Word.jsx";
import Alphabet from "./components/Alphabet.jsx";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Languages />
                <Word />
                <Alphabet />
            </main>
        </>
    );
};

export default App;