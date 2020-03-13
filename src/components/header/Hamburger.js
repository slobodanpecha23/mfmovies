import React, { Component } from "react";
import "./style/hamburger.scss";
import LogInButton from "./LogInButton";

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
                        <p>Favorites</p>
                        <p>Watchlist</p>
                        <p>My lists</p>
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
