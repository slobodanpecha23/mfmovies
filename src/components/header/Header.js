import React, { Component } from "react";
import "./style/header.scss";
import SearchField from "./SearchField";
import LogInButton from "./LogInButton";

export class Header extends Component {
    render() {
        return (
            <div className="header-style">
                <h3 className="logo-font">MFMovies</h3>
                <SearchField />
                <LogInButton />
            </div>
        );
    }
}

export default Header;
