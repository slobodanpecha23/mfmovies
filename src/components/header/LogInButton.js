import React, { Component } from "react";
import "./styleHeader/loginButton.scss";

export class LogInButton extends Component {
    render() {
        return (
            <div className="btn">
                <button type="button">Log In</button>
            </div>
        );
    }
}

export default LogInButton;
