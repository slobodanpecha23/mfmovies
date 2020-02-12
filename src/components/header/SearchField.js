import React, { Component } from "react";
import "./style/searchField.scss";

export class SearchField extends Component {
    render() {
        return (
            <form className="searchForm">
                <input type="text" placeholder="Search movie..." />
                <input type="submit" value="Search" />
            </form>
        );
    }
}

export default SearchField;
