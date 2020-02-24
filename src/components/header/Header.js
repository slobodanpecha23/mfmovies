import React, { Component } from "react";
import "./style/header.scss";
import SearchField from "./SearchField";
import LogInButton from "./LogInButton";
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div className="header-style">
                <h3 className="logo-font">
                    <Link to="/" className="header-link-style">
                        MFMovies
                    </Link>
                </h3>
                <SearchField />
                <LogInButton />
            </div>
        );
    }
}

export default Header;
