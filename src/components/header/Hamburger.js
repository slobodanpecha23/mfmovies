import React, { Component } from "react";
import "./style/hamburger.scss";
import LogInButton from "./LogInButton";
import { Link } from "react-router-dom";

export class Hamburger extends Component {
    state = {
        toggleClass: true,
        toggleNav: true,
        toggleBg: true
    };

    handleClick = () => {
        this.setState(prevState => ({
            toggleClass: !prevState.toggleClass,
            toggleNav: !prevState.toggleNav,
            toggleBg: !prevState.toggleBg
        }));
    };

    render() {
        return (
            <div>
                <div className="menu-bar">
                    <div
                        className={this.state.toggleClass ? "menu" : "active"}
                        onClick={this.handleClick}
                    >
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                    <div
                        className={this.state.toggleNav ? "nav" : "nav-active"}
                    >
                        <Link to="/favorites" className="favstyle">
                            <p>Favorites</p>
                        </Link>
                        <Link to="/watchlist" className="watchlistStyle">
                            <p>Watchlist</p>
                        </Link>
                        <Link to="/mylists" className="mylistsStyle">
                            <p>My lists</p>
                        </Link>
                        <LogInButton />
                    </div>
                </div>
                <div
                    className={
                        this.state.toggleBg ? "menu-bg-inactive" : "menu-bg"
                    }
                ></div>
            </div>
        );
    }
}

export default Hamburger;
