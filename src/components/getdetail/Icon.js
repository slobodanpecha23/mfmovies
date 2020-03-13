import React, { Component } from "react";
import { string, number } from "prop-types";

export class Icon extends Component {
    render() {
        const { color, size, path } = this.props;
        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 20 20"
            >
                <title>heart</title>
                <path fill={color} d={path}></path>
            </svg>
        );
    }
}

export default Icon;

Icon.propTypes = {
    color: string,
    size: number,
    path: string
};

Icon.defaultProps = {
    color: "#fff",
    size: 80
};
