import { createRoot } from 'react-dom/client'
import {StrictMode} from "react";
const root = createRoot(document.getElementById('root'));

function Header() {
    return (
        <header>
            <img src={"./assets/react-logo.png"} width={"40px"} alt={"React Logo"} />
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2025 Robledo development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <main>
            <h1>Reasons I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}

root.render(
    <StrictMode>
        <Header/>
        <Page/>
        <Footer/>
    </StrictMode>
)
