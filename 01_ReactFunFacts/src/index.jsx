import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";

const root = createRoot(document.getElementById('root'));

function Header() {
    return (
        <header>
            <img src={"react-logo.png"} alt={"React Logo"} className={"header-logo"} />
            <nav>
                <ul className={"nav-list"}>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2025 Daniel Robledo (Source from Scrimba). All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
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
        <Header />
        <MainContent />
        <Footer />
    </StrictMode>
)
