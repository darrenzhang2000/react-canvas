import React from "react"
import "./App.css"
import DrawArea from "./components/DrawArea"

function App() {
    return (
        <div id="container">
            hi
            <div>
                <svg>
                    <path stroke="black" d="M 0 0 L 200 100" />
                </svg>
            </div>
            <DrawArea />
        </div>
    )
}

export default App
