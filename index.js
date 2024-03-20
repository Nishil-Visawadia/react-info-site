function App() { //Pascal Case
    return (
        <>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" alt="React Logo" />
                </nav>
            </header>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <footer>
                <small>© 2024 Nishil development. All rights reserved.</small>
            </footer>
        </>
    );
}

console.log(<App />); // or App()

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

