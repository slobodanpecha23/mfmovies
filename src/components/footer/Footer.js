import React, { Component } from "react";
import "./style/footer.scss";

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h3 className="footer__logo">MFMovies</h3>
                <p className="footer__text">
                    Copyright &copy; by Slobodan Mitrovic. You are 100% allowed
                    to use this webpage for both personal and commercial use,
                    but NOT to claim as your own design. A credit to the
                    original author, Slobodan Mitrovic, is of course highly
                    appreciated!
                </p>
            </div>
        );
    }
}

export default Footer;
