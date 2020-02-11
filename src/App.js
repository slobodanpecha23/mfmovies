import React, { Component } from "react";
import Header from "./components/header/Header";

export class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <h1>Wish u amazing day!</h1>
            </div>
        );
    }
}

export default App;
