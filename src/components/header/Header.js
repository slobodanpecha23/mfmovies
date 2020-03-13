import React, { Component } from "react";
import "./style/header.scss";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

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
                <Hamburger />
            </div>
        );
    }
}

export default Header;
