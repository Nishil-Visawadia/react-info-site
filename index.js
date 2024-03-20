function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" alt="React Logo" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Nishil development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </>
    )
}

function App() { //Pascal Case
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

console.log(<App />); // or App()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />);

