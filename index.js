// import React from "react"
// import ReactDOM from "react-dom"
// import Header from "./Header";
// import Footer from "./Footer";
// import MainContent from "./MainContent";

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
