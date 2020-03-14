import React, { Component } from "react";
import "./style/addList.scss";
import Scroll from "./Scroll";

export class AddList extends Component {
    render() {
        return (
            <div className="add-list">
                <p className="new-list">
                    New List{" "}
                    <span role="img" aria-label="plus">
                        ➕
                    </span>
                </p>
                <Scroll>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                    <p>New List </p>
                </Scroll>
            </div>
        );
    }
}

export default AddList;
