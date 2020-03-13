import React, { Component } from "react";
import { string, number } from "prop-types";

export class Favicon extends Component {
    render() {
        const { color, size } = this.props;
        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 20 20"
            >
                <title>heart</title>
                <path
                    fill={color}
                    d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"
                ></path>
            </svg>
        );
    }
}

export default Favicon;

Favicon.propTypes = {
    color: string,
    size: number
};

Favicon.defaultProps = {
    color: "#fff",
    size: 80
};
